var express = require('express');
var bodyparser = require('body-parser');
var path=require('path');
var port =3000;
var http =require('http');

var app=express();
// all api for server and client side connection
var api=require('./routes/api');

//use bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'dist')));

app.use('/api',api);
app.get('*',function(err,res){
    res.sendFile(path.join(__dirname,'dist/index.html'));

});
app.set('port',port);
app.listen(port,function(err,res){
    console.log("running at port"+ port);
});