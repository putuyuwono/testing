'use strict';

var express = require('express');
var app = express();

app.set('views','views');
app.set('view engine','ejs');

app.get('/', function(req, res){
    res.render('home.ejs',{title:'Express Web'});
});

app.listen(8080);

console.log("Web running on port 8080");

module.exports.getApp = app;
