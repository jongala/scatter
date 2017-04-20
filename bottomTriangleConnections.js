if (decorate) {
    ctx.globalAlpha = 0.15;
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    
    ctx.moveTo(cc.x, cc.y);
    ctx.lineTo(p1[0], p1[1]);
    ctx.moveTo(cc.x, cc.y);
    ctx.lineTo(p2[0], p2[1]);
    ctx.moveTo(cc.x, cc.y);
    ctx.lineTo(p3[0], p3[1]);

    ctx.stroke();
    ctx.closePath();

    if (pp1 && pp2 && pp3) {
        ctx.globalAlpha = 0.5;
        ctx.strokeStyle='black';
        ctx.beginPath();
        
        ctx.moveTo(cc.x, cc.y);
        ctx.lineTo(pp1[0], pp1[1]);
        
        ctx.moveTo(cc.x, cc.y);
        ctx.lineTo(pp2[0], pp2[1]);
        
        pp3 && ctx.moveTo(cc.x, cc.y);
        pp3 && ctx.lineTo(pp3[0], pp3[1]);
        
        ctx.stroke();
        
        ctx.closePath();
    }
}