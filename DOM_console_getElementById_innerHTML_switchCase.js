//index3
//49
console.log(document);
console.dir(document);//this is DOM
document.write("dont do that");
var output = document.getElementById("c");
console.dir(output);
output.innerHTML = "Hello World";
//53
var output = document.getElementById('output');
var val = document.getElementById("val");
val.value = output.innerHTML;
//63
var myTime = prompt("what are you doing?");
var output = document.getElementById("output");
var html;
switch(myTime){
    case "18":
        html = "wake up time";
        break;
    case "12":
        html = "lunch";
        break;
    case "16":
        html = "dinner";
        break;
    default:
        html = "nothing to do";
}
output.innerHTML = html;
//69
var computer = "Paper";
console.log(computer.charAt(0));//show P
console.log(computer.charAt(0).toUpperCase());// show P
console.log(computer.charAt(0).toLowerCase());// show p
