//369 371 index52

let myArr = [2, 5, 7, 4, 7, 89, 5, 32, 5, 23, 3, 2, 23, 55];
var a = myArr.find(function (x) {
    return x > 50;
})
let b = myArr.find(x => x > 50);
console.log(b);
let c = myArr.findIndex(x => x > 50);
console.log(c);
console.log(myArr[myArr.findIndex(x => x > 50)]);

function makeArray() {
    return Array.from(arguments);
}
let d = makeArray("test", "test2", "tet3");
console.log(d);
console.log(d.findIndex(a => a == "test2"));
let test = d.entries();
console.log(test);
console.log(test.next().value);
/*

console.log(test.next().value);
console.log(test.next().value);
*/
let test1 = [...test];
console.log(test1);
let mySet = new Set(["test", "test2", "tet3", "JavaScript", "JS6", "hello", "world"]);
console.log(mySet);
let myArr2 = Array.from(mySet);
console.log(myArr2);
console.log(myArr2.copyWithin(4, 1));
console.log(myArr2.fill("tester"));