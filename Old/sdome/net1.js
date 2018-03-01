//链接多个客户端
var net = require('net');
var chatServer = net.createServer(),
    clientList = [] ;
//数据处理函数
function broadcast(message,client){
    var cleanup = []
    //循环发送设备给其他用户
    for(var i=0;i<clientList.length;i++){
        if(client !== clientList[i]){
            if(clientList[i].writable){
                clientList[i].write(client.name+'says'+message)
            }else{
                cleanup.push(clientList[i])
                clientList[i].destroyed()
            }
        }
    }
    //无法链接的清除掉
    for(i=0;i<cleanup.length;i++){
        clientList.splice(clientList.indexOf(cleanup[i]),1)
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
    //关闭时移除该客户端
    client.on('end',function(){
        clientList.splice(clientList.indexOf(client),1)
    })

}).listen(8080)