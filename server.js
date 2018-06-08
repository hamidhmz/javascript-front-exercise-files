var express = require('express');
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function (req, res, next){
    console.log(`${req.method} request for '${req.url}'`);
    next();
});
app.post('/post-api',function (req, res){
    res.json(req.body);
});
app.use(express.static('./'));
app.listen(3000);
console.log('express app running at http://localhost:3000');

module.exports = app;