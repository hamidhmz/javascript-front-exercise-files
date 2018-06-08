//index4
//73
var output = document.getElementById("output");
var answer = prompt("how many times do you want me to loop?");
var x = 0;
do{
    x++;
    output.innerHTML += "value x = "+x+"<br>";
}while(x < answer)
// while(x < answer){
//     x++;
//     output.innerHTML += "value x = "+x+"<br>";
// }
//85
var output = document.getElementById("output");
var userNames = ["mike","john","larry"];
for(value of userNames){
    output.innerHTML += value+"<br>";
}//for array
//87
var output = document.getElementById("output");
var userNames = {a:"mike",b:"john",c:"larry"};
for (var x in userNames){
    output.innerHTML += x +"=" +userNames[x]+"<br>";
}
for (var x in document){
    output.innerHTML += x +"=" +document[x]+"<br>";
}