//239 index28
var Form ,email1;
function validation(){
    event.preventDefault();
    Form = event.target.parentElement;
    email1 = Form.childNodes[9].value;
    if(email1.match(/^\w\S*@\S+\.[a-z]{2,3}$/) !== null){
        Form.submit();
    }else{
        document.querySelector('#emailV').innerHTML = "This email Is Not Correnct";
        document.querySelector('#emailV').classList.add('emailDiv');
        Form.childNodes[9].classList.add('error');
    }
}