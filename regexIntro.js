//238 index27
var output = document.querySelector('#output');
var str = 'fjiejfi oooiir qqoqo javascript fjofwi ofejoiwjf';
var myfun = function(){
    var p = /javascript/;
    var r = str.match(p);//return array
    console.log(r);
}
myfun();
var myfun2 = function(){
    var p = /Javascript/;
    var r = str.match(p);
    console.log(r);//return null
}
myfun2();

var myfun3 = function(){
    var p = /Javascript/i;
    var r = str.match(p);
    console.log(r);//return array
}
myfun3();
str = 'fjiejfi oooiir qqoqo javascript fjofwi ofejoiwjf Javascript fijeijwofjw javaScript IJIJIJFE Javascript';
var myfun4 = function(){
    var p = /javascript/i;
    var r = str.match(p);//return array with 1 length one element
    console.log(r);
}
myfun4();

var myfun5 = function(){
    var p = /javascript/ig;
    var r = str.match(p);//return array with 4 length four element
    console.log(r);
}
myfun5();

var myfun6 = function(){
    var p = /javascript/ig;
    var r = str.match(p);//return array with 4 length four element
    for(t in r){
        console.log('for(t in r):echo r[t]:'+r[t]);
    }
    for(t of r){
        console.log('for(t of r):echo t:'+t);
    }
    r.forEach(function(t){
        console.log('forEach:'+t);
    })
}
myfun6();
