function test() {
    console.log('test called')
}
console.log(typeof (test))

console.log('test is instance of object: ', test instanceof Object)
console.log('test is instance of function: ', test instanceof Function)
var testVar = 'test var'

console.log('test2 is instance of object: ', testVar instanceof Object)


function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

Person.prototype.nationality = "English";

const testPerson = new Person("Sally", "Rally", 48, "green")

console.log(testPerson.nationality)

function testGlobalVariable(){
    test2G = 'this is global variable'
}
testGlobalVariable()
console.log(test2G)