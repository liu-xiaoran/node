// Express 对Node中的http进行封装
var espress = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('Hello World!');
});
app.listen(3000,function(){
    console.log('listening on port 3000!');
})
// koa 基于ES6重新编写的web框架，语法糖使其看起来像同步
var koa = require('koa');
var app = koa();
app.use('/test',function*(){
    yield doReadFile1();
    var data = yield doReadFile2();
    this.body =data
})
app.listen(3000);
// koa2
app.use(async(ctx,next)=>{
    await next();
    var data = await doReadFile();
    ctx.response.type = 'text/plain';
    ctx.response.body = 'data';
})