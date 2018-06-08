//357 index48
const output = document.getElementById('output');

function outputMessage(message = "No value", b = show(message, "blank", "new")) {
    output.innerHTML = message;
}

function show() {
    console.log(arguments[0]);
}

function myFun(a, b, c, d, e) {
    if (arguments.length == arguments.callee.length) {
        console.log("okay");
    }
    else {
        console.log("Missing " + (arguments.callee.length - arguments.length));
    }
    console.log(arguments);
    console.log(arguments.length);
    console.log();
}
myFun(1, 2, 3);
function myFun2(...whateveriwant){
    console.log(whateveriwant);
    console.log(whateveriwant.length);
}
//359


//Start
        var mes0 = function mes0(value) {
            var a = "Hello ";
            console.log(a + value);
        };
        mes0('test');
        var mes1 = function mes1(value) {
            return "Hello " + value;
        };
        console.log(mes1('test'));
        var mes2 = function mes2(value) {
            var a = "Hello ";
            console.log(a + value);
        };
        mes2('test');

//Solution

    
        let mes3 = (value) => {
            var a = "Hello ";
            console.log(a + value);
        };
        mes3('test 1');
        let mes4 = value => "Hello " + value;
        console.log(mes4('test 2'));
        let mes5 = value => console.log("Hello " + value);
        mes5('test 3');
        
//368
let person = {
    firstname: "Laurence"
    , lastname: "Svekis"
};
console.log(person);
let {
    firstname, lastname
} = person;
console.log(firstname);
console.log(lastname);
let myArr3 = ["JavaScript", "JS", "JS6", "ECMA"];
console.log(myArr3);
let [a, b, c, d, e = "Java"] = myArr3;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);