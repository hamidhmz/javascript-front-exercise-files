//297 index38
var can = document.querySelectorAll('canvas');
for (var x = 0; x < can.length; x++) {
    can[x].addEventListener('mouseover', function (event) {
        document.getElementById('myImage').src = event.target.toDataURL();
    })
}
window.onload = function () {
    var canvas1 = document.getElementById('canvas1');
    var ctx1 = canvas1.getContext('2d');
    ctx1.fillStyle = 'red';
    ctx1.fillRect(5, 5, 150, 100);
    var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');
    ctx2.beginPath();
    ctx2.fillStyle = 'blue';
    ctx2.arc(60, 60, 50, 0, 2 * Math.PI);
    ctx2.stroke();
    ctx2.fill();
    var canvas3 = document.getElementById('canvas3');
    var ctx3 = canvas3.getContext('2d');
    ctx3.fillStyle = 'yellow';
    ctx3.arc(60, 60, 70, 0, 2 * Math.PI);
    ctx3.stroke();
    ctx3.fill();
    //var myImage = document.getElementById('myImage');
    //ctx3.drawImage(myImage,10,10);
    //ctx3.drawImage(canvas1,10,10);
    //ctx3.drawImage(canvas2,10,10);       
}
