var express = require("express");

var app = express();

app.use(express.static('./public'));

app.get('/',function(req,res){
    res.end('hello')
});

app.listen(1800,function after(){
    console.log("1800");
});