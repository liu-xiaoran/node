//链接多个客户端
var net = require('net');
var chatServer = net.createServer(),
    clientList = [] ;
//数据处理函数
function broadcast(message,client){
    for(var i=0;i<clientList.length;i++){
        if(client !== clientList[i]){
            clientList[i].write(client.name+'says'+message)
        }
    }
}

// 链接服务器
chatServer.on('connection',function(client){
    client.name = client.remoteAddress+':'+client.remotePort
    client.write('Hi'+client.name+'!\n')
    clientList.push(client)

    client.on('data',function(data){
        broadcast(data,client)
    })
}).listen(8080)