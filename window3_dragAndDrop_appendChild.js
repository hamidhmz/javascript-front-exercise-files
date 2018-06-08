//index8
//157
var holderItem;
function dStart(){
    message("drag Started","wrapper");
    holderItem = event.target;
}
function message(content,target){
    document.getElementById(target).innerHTML = content;
}
function nDrop(){
    event.preventDefault();//preventet for defult actions
}
function dDrop(){
    event.preventDefault();
    message("Drop it","wrapper");
    if(event.target.className == "box"){
        document.getElementById("2").innerHTML = document.getElementById("getEle").parentElement.id;
        event.target.appendChild(holderItem);
    }
}