 'use strict'
 var 
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');
var root = path.resolve(process.argv[2]||'.'); // 从命令行参数获取root目录
console.log('Static root dir:'+root);
// 创建服务器
var server = http.createServer(function(request,response){
    var pathname = url.parse(request.url).pathname; //获取URL的path
    var filepath = path.join(root,pathname); //获取对应的本地文件路径
    fs.stat(filepath,function(err,stats){
        if(!err&&stats.isFile()){
            console.log('200'+request.url);
            response.writeHead(200);
            fs.createReadStream(filepath).pipe(response);
        }else{
            console.log('404'+request.url);
            response.writeHead(404);
            response.end('404 Not Found')
        }
    })
});
server.listen(8080);
console.log('http://127.0.0.1:8080/')