//index14
var i = document.getElementById('imgSwap');
var imgHolder = "https://via.placeholder.com/350x150/ffff00/fff?text=Image10";
var t;
window.onload = function () {
    i.src = imgHolder;
}
i.addEventListener('click', function () {
    console.log(event);
    message("clicked");
})
i.addEventListener('mouseover', function () {
    t = this.src;
    this.src = "https://via.placeholder.com/350x150/ff0000/fff?text=Image2";
    message("Over");
})
i.addEventListener('mouseout', function () {
    this.src = t;
    message("Out");
})

function cImg(t) {
    message(t.src);
    imgHolder = t.src;

    t.src = "https://via.placeholder.com/350x150/ff0000/fff?text=Image2";
}

function bImg(t) {
    t.src = imgHolder;
}

function message(m) {
    document.getElementById('wrapper').innerHTML = m;
}