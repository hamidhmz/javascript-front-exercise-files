//index7
//153
function printKey(){
    document.getElementById("key").innerHTML = event.key;
    event.target.value = "";
}
//nan means not a number
function numCheck(){
    message2(!isNaN(event.key));
    return !isNaN(event.key);
}
function message2(a){
    document.getElementById("check2").innerHTML = a;
}
//155  validate a form
function valForm(){
    var p = event.target.children;
    console.dir(p.firstName);
    if(p.firstName.value == ""){
        message3("need a first name!!","firstNameValidateMessage");
    }
    if(p.lastName.value == ""){
        message3("need a last name!!","lastNameValidateMessage");
    }
    if(p.age.value == ""){
        message3("need a age!!","ageValidateMessage");
    }
    if(p.age.value == "" || p.lastName.value == "" || p.firstName.value == ""){
        return false;
    }
    console.dir(p.firstName);
    return true;
}
function message3(a,target){
    document.getElementById(target).innerHTML = a;
}

var iColor = "222";
var iText = "Image1";
var iSize = "350x150";

function imgU() {
    console.dir(event.target);
    console.dir(event.target.value);
    console.log(event.target.parentElement.myImage.src)
    if (event.target.type == "select-one") {
        iSize = event.target.value;
    }
    else if (event.target.type == "text") {
        iText = event.target.value;
    }
    else if (event.target.type == "color") {
        var nColor = event.target.value;
        iColor = nColor.replace("#", "");
    }
    var imsrc = "http://via.placeholder.com/" + iSize + "/" + iColor + "/fff?text=" + iText;
    message(imsrc);
    event.target.parentElement.myImage.src = imsrc;
}

function message(m) {
    document.getElementById('wrapper').innerHTML = m;
}