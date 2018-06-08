//376 index54
function getData(url) {
    return new Promise(function (response) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = function () {
            if (xhr.status == 200) {
                response(xhr.response);
            }
        }
        xhr.send();
    })
}
getData('https://api.myjson.com/bins/snnh5').then(function (response) {
    console.log(response);
})
