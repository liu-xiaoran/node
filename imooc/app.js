var express = require("express");
var port = process.env.PORT || 3000;
var app = express() ;

app.set('views','./views');
app.set('view engine','pug');
app.listen(port);

console.log("starred on: "+port);
//add route
app.get('/',function(req,res){
    res.render('index',{
        title: 'imooc homePage'
    })
})
app.get('/list',function(req,res){
    res.render('list',{
        title: 'imooc listPage'
    })
})
app.get('/detail/:id',function(req,res){
    res.render('detail',{
        title: 'imooc detailPage'
    })
})
app.get('/admin',function(req,res){
    res.render('admin',{
        title: 'imooc adminPage'
    })
})