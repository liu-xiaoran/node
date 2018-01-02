let http = require('http');
let querystring = require('querystring');
//监听服务器的request事件
http.createServer(function(req,res){
    let postDate = "";
    req.setEncoding('utf8');
    //请求的data事件
    req.on('data',function(trunk){
        postDate += trunk
    })
    //请求的end事件
    req.on('end',function(){
        res.end(postDate);
    })
}).listen(8888)
console.log('服务器启动')