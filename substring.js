//index17
document.getElementById('myT').addEventListener('select', myFun);

function myFun() {
    var e = event.target;
    var str = event.target.value;
    var result = str.substring(e.selectionStart, e.selectionEnd);
    document.getElementById('output').innerText = result;
}