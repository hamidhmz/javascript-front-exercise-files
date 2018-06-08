//317 index43
window.onload = init;
function init(){
    loadJSON();
    /*
    loadJSON(function(response){
        console.log(response);
    })
    */
}


function loadJSON(callback){
    var xHR = new XMLHttpRequest;
    // xHR.onreadystatechange = function(){
    //     console.log(this.readyState);
    //     if(this.readyState == 4 && this.status == 200){
    //         var myObj = JSON.parse(this.responseText);
    //         console.log(myObj);
    //     }
    // }
    xHR.onload = function(){
        var myObj = JSON.parse(this.responseText);
        console.log(myObj);
    };
    xHR.open('GET','https://api.myjson.com/bins/kbwi5',true);
    xHR.send();
    console.log(xHR);
}