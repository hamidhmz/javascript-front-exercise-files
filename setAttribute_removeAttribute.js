//index12
//185
var output = document.querySelector("#output");
output.innerHTML = "this is the set attribiute";
var setAttribute = document.querySelector("#setAttribute");
var removeAttribute = document.querySelector("#removeAttribute");
setAttribute.onclick = setAttribute1;
removeAttribute.onclick = removeAttribute1;
function setAttribute1(){
    output.setAttribute("style","color:red;padding:10px;border:1px solid black");
}
function removeAttribute1(){
    output.removeAttribute("style");
}
console.log(removeAttribute.getAttribute("shans"));