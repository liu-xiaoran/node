var http = require('http');
var server = http.createServer(function(request,response){
    console.log(request.method+':'+request.url);
    response.writeHead(200,{'Content-Type': 'text/html'});
    response.end('<h1>Hello world!'+request.url+'</h1>')
})
server.listen(8001);
console.log('http://127.0.0.1:8001/')