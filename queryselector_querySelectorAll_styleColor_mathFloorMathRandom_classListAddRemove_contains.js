//index10
//173 queryselector
document.querySelector("#output").innerHTML = 'this is out put of querySelector';
console.log(document.querySelectorAll("[id='id1'], [id = 'id2']"));
console.log(document.querySelector('input[name="last"]'));
//177
var bgColor = ["red", "blue", "green", "yellow", "pink", "purple"];
var c;
document.querySelector("#output").style.color = 'red';
var el = document.querySelector(".output");
function start(){
    setInterval(changeColor,100);

}
function changeColor(){
    var colors = ['red','yellow','blue','green','gray','pink','orange'];
    var i = Math.floor(Math.random()*colors.length);
    el.style.color = colors[i];
}
//181

function activeThat(){
    console.dir(event.target.parentElement.children.length);
    if(!event.target.classList.contains('active')){
        for(var t = 0 ;t < event.target.parentElement.children.length ;t++){
            event.target.parentElement.children[t].classList.remove('active');
        }
        event.target.classList.add('active');
    }else{
        for(var t = 0 ;t < event.target.parentElement.children.length ;t++){
            event.target.parentElement.children[t].classList.remove('active');
        }
    }
}