//index21

//211 , 213 , 215
var a = "hellow world";
var b = new String("hello world");
console.log("a:"+a);
console.log("b:"+b);
console.log("a[2]:"+a[2]);
console.log("b[2]:"+b[2]);
console.log("a.length:"+a.length);
console.log("b.length:"+b.length);
console.log("a.charAt(6):"+a.charAt(6));
console.log("a.concat(b):"+a.concat(b));
console.log("a+b:"+a+b);
console.log("a.toUpperCase():"+a.toUpperCase());
console.log("a.toLowerCase():"+a.toLowerCase());
console.log("a.indexOf('h'):"+a.indexOf('h'));
console.log("a.slice(2,5):"+a.slice(2,5));
console.log("a.substr(2,3):"+a.substr(2,3));
var message = document.querySelector('#message');
function rHeading(){
    var m = document.getElementById('myString').value;
    var c = message.innerText;
    c = c.replace("JavaScript",m);
    message.innerText = c;
}
