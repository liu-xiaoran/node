// 导入WebSocket
const WebSocket = require('ws');
// 引用Server
const WebSocketServer = WebSocket.Server;
// 实例化
const wss = new WebSocketServer({
    port:3000
})
// REST输出
