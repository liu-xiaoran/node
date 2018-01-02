//创建新的TCP服务器
var net = require('net')
var chatServer = net.createServer() //创建服务
chatServer.on('connection',function(client){
    client.write('hi!\n')

    client.on('data',function(data){
        console.log(data)
    })

    
    // client.end()
})
chatServer.listen(8080)
console.log("run")