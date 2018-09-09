var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');





setInterval(draw, 1000);
var i=0;
function draw() {
    console.log("in the draw method "+i++);
    ctx.beginPath();
    ctx.arc(100, 100, 20, 0, 2*Math.PI);
    ctx.fillStyle = 'rgb(193, 100, 124)';
    ctx.fill();
    ctx.closePath(); 
}
