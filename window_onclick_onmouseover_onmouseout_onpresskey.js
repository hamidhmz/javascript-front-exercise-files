//index6
//126 window dom
console.dir(window.USB);
var output = document.getElementById("output");
output.innerHTML += window.innerHeight + " " + window.innerWidth;
var w= window.open("index.html");
w.onbeforeunload = function(){
    alert("dont go anywhere");
}
//127
console.log(window.history.length);
window.history.go(-3);
//130 
var Timer;
function startInt(){
    myTimer = window.setTimeout(myalert,1000);
}
function clearInt(){
    window.clearInterval(myTimer);
}
function myalert(){
    alert("fuck you");
}
//132
document.write("<br>" + navigator.userAgent);
//134
function goUrl(){
    var url = document.getElementById("url").value;
    window.location = url;
}
//135
console.dir(document.myForm);
console.dir(document.myForm.children);
console.dir(document.myForm.children[1]);
console.dir(document.body.children);
//137
function myFun(t){
    console.dir(t);
    document.write("<br>" + t.value);
}
//139
document.getElementById("1").onclick = myCLICK;
function myCLICK(){
    console.dir(this);
    this.value = "CLICKED";
    output.innerHTML = "worcked";
}
//140
window.onload = function(event){
    myFun('window;');
}
function myFun(a){
    document.getElementById("141").innerHTML = "welcome " + a;
}
//143
var imgHolder = "https://via.placeholder.com/300x302";
function cImg(t){
    t.src = "https://via.placeholder.com/350x150/222/fff?text=onmouseover";
    message(t.src);
}
function message(m){
    document.getElementById("wrapper").innerHTML = m;
}
function bImg(t){
    t.src = imgHolder;
    message(t.src);
}
//145
function sendInfo(){
    console.dir(event);
    console.dir(event.target.parentElement.e1.value);
    message1('test');
}
function message1(m){
    document.getElementById("upform").innerHTML = m;
}
//147
function printFirstName(){
    document.getElementById("upform").innerHTML = document.getElementById("e1").value;
}
function printLastName(){
    document.getElementById("upform2").innerHTML = document.getElementById("e2").value;
}
//149
function imgU(){
    var target = event.target.value;
    console.dir(event.target);
    console.dir(event.target.value);
    document.getElementById("myImage").src = "https://via.placeholder.com/" + target;
}