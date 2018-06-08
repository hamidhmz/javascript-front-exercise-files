//246 index30
var reg,result1,result2,area;
document.querySelector("#btn").onclick = lookUp;
function lookUp(){
    area = document.querySelector("textarea").value;
    reg = new RegExp("Java","ig") ;
    console.log(area);
    result1 = reg.test(area);
    console.log(result1);
    result2 = reg.exec(area);
    console.log(result2);
}