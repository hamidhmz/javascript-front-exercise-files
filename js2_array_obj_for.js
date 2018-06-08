//index2
//22
var myArray = ["string",100,false];//literal array//can be string integer and boolean
var myArray1 = [];
var myArray2 = new Array("string",100,false);
var myArray3 = new Array();
//25
var myArray = ["string",100,false];
console.log(myArray.length);
//27
var myArray = ["string",100,false];
console.log(typeof myArray);//object
console.log(Array.isArray(myArray));//true
//28
console.log(Math.random());//random value between 0 and 1
Math.floor(4.9989899897);//4
//30 and 34
var animals = ["cat","dog","rabbit","bird","fish"];
animals.push("sheep");//add item at the end of an array
console.log(animals);
animals.pop();//remove last item from end of an array
console.log(animals);
animals.shift()//remove first item from an array
console.log(animals);
animals.unshift("horse")//add item to first of an array
console.log(animals);
console.log(animals.splice(2,2));//["rabbit","bird"]
animals.splice(2,2);//fisrt argument mean index position and second argument mean how match
console.log(animals);
animals.reverse();//reverse all items
console.log(animals);
animals.sort();//sort items by value alfabet
console.log(animals);
animals[20] = "tina";
animals.fill("mouse",6,20);//yani arraye ra az khaneye 6hame ye khane hae khalish ra por kon ta 20
animals.fill("mouse",6);//yani arraye ra az khaneye 6hame ye khane hae khalish ra por kon ta harja bod
console.log(animals);
var index = animals.indexOf("tina");
console.log(index);//20
console.log(animals.indexOf("hamid"));//-1
console.log(animals.includes("dog"))//false
console.log(animals.slice(0,2));//not change in array just echo
//39
var arr = ["cat","dog","fish",4,2,5];
for(var x in arr){
    console.log(x);
    console.log(arr[x]);
}
//41
var obj = {
    color:"red",
    make:"ford",
    door:5
}
obj.wheels = 5;
console.log(obj);
console.log(obj.color);
//45
var obj = {
    color:"red",
    make:"ford",
    door:5
}
for(var properti in obj){
    console.log(properti);
}