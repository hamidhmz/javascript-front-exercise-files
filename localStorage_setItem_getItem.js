//280 index35
document.querySelector('#output').innerHTML = localStorage.getItem('storage');
document.querySelector('#submit').onclick = setitem;
function setitem(){
    var value = document.querySelector('#setItem').value;
    localStorage.setItem('storage',value);
    document.querySelector('#output').innerHTML = localStorage.getItem('storage');
}