//index5
//92
function myFunction(){
    alert("hello");
}
myFunction();
//93
var output = document.getElementById("output");
output.innerHTML = myFun1(4,5,6);
function myFun1(a,b,c){
    var response = a + b + c;
    return response;
}
//95
function myFun2(){
    var name = prompt("what is your name?");
    output.innerHTML += "<br>wellcome " + name;
}
//99
function myFun3(para = "hello world"){//set defult for this function
    document.getElementById("output").innerHTML = para;
};
//103 anonymous function
var a = function(b){
    document.getElementById("output").innerHTML = "<br>Wellcom to an anonymous function " + b;
}
function myFun4(){
    var name = prompt("what is your name?");
    a(name);
}
//104 self invoking function
(function(){
    alert("hello again");
})()
//117 callback function when we pass function to another as argument
var output = document.getElementById("output");
function makeMessage(s1,s2,callback){
    var result1 = callback(s1,s2);
    output.innerHTML = result1;
}
makeMessage("hello","world",function(s1,s2){
    var result2 = s1 + s2 + "Worked";
    return result2;
})