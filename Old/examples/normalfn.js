'use strict'
// 引入文件系统
var fs=require('fs')
// 异步读取文件
fs.readFile()
// 同步读取文件
fs.readFileSync()
// 异步写入文件
fs.writeFile()
// 同步写入文件
fs.writeFileSync()
// 返回文件信息
fs.stat()
// 打开一个流
var rs=fs.createReadStream('sample.txt','utf-8');
// 流中间对应的三个响应事件
rs.on('data',function(chunk){  //流已经可以读取，data事件可能会有多次，每次传递的chunk只是流的一部分
    console.log('DATA：'+chunk)
})
rs.on('end',function(){   //流已经到末尾
    console.log('END')
})
rs.on('error',function(err){   //出错
    console.log('ERROR:'+err)
})
// 流的写入只要不断调用write(),最后以end()结束
var ws1=fs.createWriteStream('output.txt','utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.')
ws1.end();   // 所有可以读取的流都继承自 stream.Readable，所有可以写入的流都继承自stream.Writable。
// 复制文件 pipe()
var fs = require('fs');
var rs = fs.createReadStream('samle.txt');
var ws = fs.createWriteStream('copied.txt')
rs.pipe(ws)  // 复制后自动关闭，或者调用 readable.pipe(writable, { end: false });
// HTTP服务部分 request封装http请求 response封装http响应 eg:
var http = require('http');
var server = http.createServer(function(request,response){
    console.log(request.method+':'+request.url);
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>Hello world!'+request.url+'</h1>')
})
server.listen(8001);
console.log('http://127.0.0.1:8001/')