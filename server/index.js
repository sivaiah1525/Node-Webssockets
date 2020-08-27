const websocket = require('ws')

const wss = new websocket.server({
    port: 1234
})

const clients =[]

wss.on('connection', function (ws) {
    clients.push(ws)
    ws.on('message',function(data){
        clients.forEach(client => client.send(data))
    })
})