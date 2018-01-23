// Based on https://www.jasondavies.com/poisson-disc/
function poissonDiscSampler(width, height, radius) {
  var k = 30, // maximum number of samples before rejection
      radius2 = radius * radius,
      R = 3 * radius2,
      cellSize = radius * Math.SQRT1_2,
      gridWidth = Math.ceil(width / cellSize),
      gridHeight = Math.ceil(height / cellSize),
      grid = new Array(gridWidth * gridHeight),
      queue = [],
      queueSize = 0,
      sampleSize = 0,
      tests=0,
      alltests=[],
      attempts=0,
      checks=0,
      skipped=0,
      exhausted=0;


  return function() {
    if (!sampleSize) return sample(Math.random() * width, Math.random() * height);

    // Pick a random existing sample and remove it from the queue.
    while (queueSize) {
      var i = Math.random() * queueSize | 0,
          s = queue[i];

      if (!far(s[0], s[1])) {
        //console.log('impossible');
        skipped++;
        //queue[i] = queue[--queueSize];
        //queue.length = queueSize;
        //continue;
      }


      // Make a new candidate between [radius, 2 * radius] from the existing sample.
      tests = 0;
      for (var j = 0; j < k; ++j) {
        var a = 2 * Math.PI * Math.random(),
            r = Math.sqrt(Math.random() * R + radius2),
            x = s[0] + r * Math.cos(a),
            y = s[1] + r * Math.sin(a);
        attempts++;
        tests++;
        if (j === k-1) exhausted++;

        // Reject candidates that are outside the allowed extent,
        // or closer than 2 * radius to any existing sample.
        if (0 <= x && x < width && 0 <= y && y < height && far(x, y)) {
          alltests.push(tests);
          return sample(x, y);
        }
      }


      queue[i] = queue[--queueSize];
      queue.length = queueSize;
    }
    console.log(`${sampleSize} samples from ${attempts} attempts, with ${checks} checks, could skip ${skipped}, ${exhausted} exhausted, ` + (sampleSize/attempts * 100).toPrecision(2) + '% efficiency');
    window.alltests = alltests;
    return false;
  };


  function far(x, y) {
    var i = x / cellSize | 0,
        j = y / cellSize | 0,
        i0 = Math.max(i - 2, 0),
        j0 = Math.max(j - 2, 0),
        i1 = Math.min(i + 3, gridWidth),
        j1 = Math.min(j + 3, gridHeight);

    for (j = j0; j < j1; ++j) {
      var o = j * gridWidth;
      for (i = i0; i < i1; ++i) {
        if (s = grid[o + i]) {
          var s,
              dx = s[0] - x,
              dy = s[1] - y;
          checks++;
          if (dx * dx + dy * dy < radius2) return false;
        }
      }
    }

    return true;
  }


  function sample(x, y) {
    var s = [x, y];
    queue.push(s);
    grid[gridWidth * (y / cellSize | 0) + (x / cellSize | 0)] = s;
    ++sampleSize;
    ++queueSize;
    return s;
  }
}