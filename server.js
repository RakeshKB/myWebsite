var express = require('express'); //Requiring express
var app = express(); //Express constructor used to initialize the app
var mongoose = require('mongoose'); //To connect to mongodb
var bodyParser = require('body-parser'); //
var methodOverride = require('method-override');
var morgan = require('morgan'); //HTTP request logger middleware for node.js
var fs = require('fs'); //Any operations related to File Systems
var path = require('path'); //

app.use(express.static(__dirname + '/client')); //

app.get('/',function(req,res){
    res.sendfile(__dirname+'/client/index.html');
});

app.listen(5000,function(){
    console.log("Welcome to MySite")
});

exports = module.exports = app;