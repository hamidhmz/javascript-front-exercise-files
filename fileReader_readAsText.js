//274 index33
var message = document.getElementById('message');
if(window.FileReader){
    message.innerHTML = "file reader is available";
}else{
    message.innerHTML = "file reader not available";
}
function upFiles(files){
    message.innerHTML = '';
    // for(var x = 0;x<files.length;x++){
    
    for(var x in files){
        var fReader = new FileReader();
        
        var fileName = files[x].name;
        fReader.onload = function(e){
            message.innerHTML += '<br>' + fileName;
            message.innerHTML += '<br>' + e.target.result;
        }
        fReader.readAs(files[x]);
    }
}
function upImage(input){
    // console.log(input);
    for(var d in input.files){
        
        var fReader = new FileReader();
        fReader.readAsDataURL(input.files[d]);
        fReader.onload = function(e){
            message.innerHTML = '<br><img src="'+e.target.result+'" >';
        }
    }
    
}
var fo ;
function clearImg(){
    fo = document.querySelector('#img');
    message.innerHTML = '';
}