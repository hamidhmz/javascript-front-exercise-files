//index1
//5
document.write('<br>first document. write for example i said "hi"');

console.log(document);

//6 console
console.log("hellow World");
console.error("error");
console.warn("warn");
console.log("%chello world","color:green");
console.log("%chellow world","color:yellow;background:blue");
//7 comments
/*
console.log("hellow World");
console.error("error");
console.warn("warn");
console.log("%chello world","color:green");
console.log("%chellow world","color:yellow;background:blue");
*/
//14 data type
var myNone = null;
var myString = "some string";
var myNumber = 12;
var myBoolean = true;
console.log(typeof myNone);
console.log(typeof myString);
console.log(typeof myNumber);
console.log(typeof myBoolean);

//15 prompt
var __question = prompt("what kind of question do you like?");
var __name = prompt(__question);
alert("hi "+ __name);

//18 if
var a = 5;
var c = 5;
var myternary = (a == c)?"true":"false";
console.log(myternary);