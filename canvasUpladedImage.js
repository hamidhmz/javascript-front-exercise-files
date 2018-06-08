//301 index40

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var imgLoader = document.getElementById('imgLoader');
imgLoader.addEventListener('change', upImage);

function upImage(event) {
    var r = new FileReader();
    r.readAsDataURL(event.target.files[0]);
    r.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            ctx.font = "30px Arial";
            ctx.fillText("JavaScript Course", 10, 100);
        }
        console.log(r);
        
    }
}
