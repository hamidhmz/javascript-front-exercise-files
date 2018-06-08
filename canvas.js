//295 index37

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 800;
ctx.fillStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
ctx.fillRect(10, 30, 100, 100);
ctx.lineWidth = 10;
ctx.strokeStyle = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
ctx.strokeRect(10, 150, 100, 100);
ctx.moveTo(10, 270);
ctx.lineTo(110, 370);
ctx.stroke();
ctx.beginPath();
ctx.arc(60, 430, 50, 0, 2 * Math.PI);
ctx.stroke();
ctx.font = "24px Arial";
var y = 540;

function draw() {
    var myWords = document.getElementById('myWords').value;
    ctx.fillText(myWords, 10, y);
    y = y + 30;
}
