//282 index36

var message = "hello world";
var myObj = {
    "message": "Hello World"
    , "count": 1
    , "secret": "JavaScript"
};
var myStr = JSON.stringify(myObj);
if (localStorage.getItem('mes')) {
    var myObj2 = JSON.parse(localStorage.getItem('mes'));
    document.getElementById('output').innerHTML = myObj2.message + '<br>' + myObj2.count + '<br>' + myObj2.secret;
    myObj2.count = Number(myObj2.count) + 1;
    myObj = {
        "message": "Updated"
        , "count": myObj2.count
        , "secret": "JavaScript 2"
    };
    myStr = JSON.stringify(myObj);
}
localStorage.setItem('mes', myStr);