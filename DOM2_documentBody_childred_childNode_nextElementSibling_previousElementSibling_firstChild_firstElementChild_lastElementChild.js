//index9
//166
console.dir(document.body.children.myForm);
console.dir(document.body.childNodes[12]);
console.dir(document.body.childNodes[12].childNodes[9]);
console.dir(document.body.childNodes[12].childNodes[9].children.four);
console.dir(document.body.childNodes[12].childNodes[9].children.four.nextElementSibling.id);
console.dir(document.body.childNodes[12].childNodes[9].children.four.previousElementSibling.id);
console.dir(document.body.childNodes[12].childNodes[9].children.four.parentElement);
console.dir(document.body.childNodes[12].childNodes[9].children.four.parentElement.firstChild);
console.dir(document.body.childNodes[12].childNodes[9].children.four.parentElement.firstElementChild);
console.dir(document.body.childNodes[12].childNodes[9].children.four.parentElement.firstElementChild.id);
console.dir(document.body.childNodes[12].childNodes[9].children.four.parentElement.lastElementChild.id);
//167
var output = document.getElementById('output');
var divList = document.getElementsByTagName('div');
console.log(divList);
function myFun1(){
    var x = document.getElementById('wdiv').value;
    if(divList[x] != undefined){
        divList[x].innerHTML = 'welcome to function one';
    }else{
        output.innerHTML = "this divlist don't exist!!";
    }
}