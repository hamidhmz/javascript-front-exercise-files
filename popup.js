//index19
var wn;
//208
document.querySelector('#myT').addEventListener("click",popup);
document.querySelector('#myT1').onclick = popupclose;
function popup(){
    var url = document.getElementById('url').value;
    // window.open(url,"_blank");
    // window.open(url,"_blank","top=0,width=200");
    wn = window.open(url,"_blank","top=0,width=200,height=200");
}
function popupclose(){
    wn.close();
}