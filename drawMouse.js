var mel = document.querySelector('#mouse');
    var mctx = mel.getContext('2d');
    var mw = mel.width;
    var mh = mel.height;


    /*mctx.scale(0.8, 0.8);
    mctx.translate( mw/10, mh/10);*/


    function drawMouse(e) {
        mctx.clearRect(0, 0, mw, mh);

        var x = e.offsetX;
        var y = e.offsetY;

        circle(mctx, x, y, 20, '#000');

        var wscale = main.cellSize * 2 * 0.8660;
        var hscale = main.cellSize * 1.5;

        var i = floor(y/hscale);
        var j = floor(x/wscale);

        var colOffset = (i % 2) ? 1 :0;


        var grid = main.points;

        var p1,p2,p3;

        var p1 = grid[i][j + colOffset];
        var p2 = grid[i + 1][j + 1];
        var p3 = grid[i + 1][j];

        var tri = main.topTriangles;

        var t1 = tri[i][j + colOffset];
        var t2 = tri[i + 1][j + 1];
        var t3 = tri[i + 1][j];


        circle(mctx, p1[0], p1[1], 20, '#09c' );
        circle(mctx, p2[0], p2[1], 20, '#09c' );
        circle(mctx, p3[0], p3[1], 20, '#09c' );

        circle(mctx, t1[0], t1[1], 20, '#c00' );
        circle(mctx, t2[0], t2[1], 20, '#c00' );
        circle(mctx, t3[0], t3[1], 20, '#c00' );

    }

    //mel.addEventListener('mousemove', drawMouse);