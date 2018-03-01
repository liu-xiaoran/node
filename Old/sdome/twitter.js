//基于express的web服务器
var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var app = express();
app.listen(8080);
var tweets = [];

app.get('/',function(req,res){
    res.send('Welcome to Node Twitter')
})

app.post('/send',jsonParser,function(req,res){
    if(req.body&&req.body.tweet){
        tweets.push(req.body.tweet)
        res.send({status:'ok',message:'Tweet received'})
    }else{
        res.send({status:"nok",message:'No tweet received'})
    }
})

app.get('/tweets',function(req,res){
    res.send(tweets)
})