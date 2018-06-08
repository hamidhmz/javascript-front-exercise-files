//242 index29
var output,search,replace,reg,result ;
document.querySelector("#btn").addEventListener("click",lookUp);
function lookUp(){
    output = document.querySelector("#output").innerHTML;
    search = document.querySelector("#search").value;
    replace = document.querySelector("#replace").value;
    if(search == "" | search == null){
        document.querySelector("#search").classList.add("error");
        return false;
    }else if(replace == "" | replace == null){
        document.querySelector("#replace").classList.add("error");
        return false;
    }
    reg = new RegExp(search,"gi");
    result = output.match(reg);
    if(result){
        document.querySelector("#output").innerHTML = output.replace(reg,' '+replace+' ');
    }else{
        document.querySelector("#search").classList.add("error");
    }
}