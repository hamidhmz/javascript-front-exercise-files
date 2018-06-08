//347 index47
const friend = {firstName:"Larry",lastName:"Svekis"};
friend.firstName = "hamid";
console.log(friend);
let myArr = [];

for(let i=0;i<10;i++){
    myArr.push(i);
}
console.log(myArr);

const myArr1 = [];

for(let i=0;i<10;i++){
    myArr1.push(i);
}
console.log(myArr1);

//349 
let a = " hello  ";
console.log(a.trim());//echo without white spaces // 'hello'
console.log(a.startsWith(" he"));//echo true
console.log(a.endsWith("lo  "));// echo true
console.log(a.includes("llo"));//echo true
console.log(a.repeat(3));//echo hello    hello   hello
//351 , 353
a = "More Lines \n\
More Lines";
b = `More " ' " ' '"" ' '' ' ' 'Lines
More Lines
More Lines`;
console.log(a);
console.log(b);
let name = 'hamid';
let text = `hi ${name} to london`;
console.log(text);