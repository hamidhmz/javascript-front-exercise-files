//365 index50

let testSet = Object.create(null);
testSet.id = 0;
testSet[10] = "Hello World";
if (testSet.id) {
    console.log("its there")
}
else {
    console.log("not there")
}
console.log(testSet['10']);
let a = null;
let b = null;
testSet[a] = "whatever";
console.log(testSet[b]);
let testSet2 = new Set();
testSet2.add("hello world");
testSet2.add("hello world 1");
testSet2.add("hello world 2");
testSet2.add("hello world");
//testSet2.delete("hello world");
testSet2.forEach(function (value, key) {
    console.log(key + " " + value);
})
let myArr = [1, 4, 6, 3, 6, 3, 6, 3, 644, 23, 32, 2, 3, 4, 5, 6, 7, 87, 2, 3, 4, 3, 43, 33];
console.log(myArr);

function removeDup(a) {
    return [...new Set(a)];
}
console.log(testSet2);
console.log(removeDup(myArr));