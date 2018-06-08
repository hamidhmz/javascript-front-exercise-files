//304 index41
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var output = document.getElementById('output');
canvas.width = 700;
canvas.height = 700;
window.onload = init;
var pos = {
    x: 0
    , y: 0
};
var bgColor = "black";
var bgC = document.getElementById('bgColor');
bgC.addEventListener('change', function (event) {
    bgColor = event.target.value;
})
document.getElementById('save').addEventListener('click', function () {
    var dataURL = canvas.toDataURL();
    console.log(dataURL);
    document.getElementById('holder').src = dataURL;
})
document.getElementById('clear').addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

function init() {
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mousemove', sPos);
    canvas.addEventListener('mouseenter', sPos);
}

function draw(e) {
    if (e.buttons !== 1) return;
    output.innerHTML = "X = " + pos.x + " Y = " + pos.y;
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
    sPos(e);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = bgColor;
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.stroke();
}

function sPos(e) {
    console.dir(e);
    pos.x = e.pageX;
    pos.y = e.pageY;
}