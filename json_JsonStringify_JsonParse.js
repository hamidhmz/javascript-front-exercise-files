//308 index42
var myObj1 = {"first":"Laurance"};
var myObj2 = {first:"Laurance"};
console.log(myObj1);
console.log("typeof myObj1:"+typeof myObj1);
console.log(myObj2);
console.log("typeof myObj1:"+typeof myObj2);

//go to jsonlint.com and myjson.com
//310
var party = JSON.parse(data);
console.log("party:");
console.log(party);
console.log("typeof party:"+typeof party);
console.log("typeof data:"+typeof data);
//311 , 313
var party = [];
var el;
var output = document.getElementById('output');
window.onload = buildList;
var addGuest = document.querySelector('input[type="button"]');
addGuest.addEventListener('click', function (e) {
    var g = document.getElementById('guestName');
    var n = document.getElementById('guestNum');
    message('?', g.value + ' +' + n.value, party.length, '');
    party.push({
        name: g.value
        , guests: Number(n.value)
        , status: false
    })
    localStorage.setItem('party', JSON.stringify(party));
    g.value = "";
    n.value = 0;
})
output.addEventListener('click', function (e) {
    el = e.target;
    var ds = el.dataset;
    el.classList.toggle('active');
    el.children[0].innerHTML = el.children[0].innerHTML == '?' ? '?' : '?';
    party[ds.id].status = party[ds.id].status ? false : true;
    localStorage.setItem('party', JSON.stringify(party));
})

function buildList() {
    if (localStorage.getItem('party')) {
        party = JSON.parse(localStorage.getItem('party'));
    }
    else {
        party = JSON.parse(data);
    }
    for (var x = 0; x < party.length; x++) {
        var person = party[x].name + ' +' + party[x].guests;
        if (party[x].status) {
            message('?', person, x, 'active');
        }
        else {
            message('?', person, x, '');
        }
    }
}

function message(m, person, id, c) {
    output.innerHTML += '<div class="toggle ' + c + '" data-id="' + id + '" data-person="' + person + '" ><span>' + m + '</span> ' + person + ' </div>';
}