//index24
//231
function testMe(){
    try{
        console("hello");
    }
    catch(e){
        document.getElementById("message").innerHTML = e.message;
        console.log(e);
    }
}