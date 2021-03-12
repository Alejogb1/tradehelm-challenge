const webSocketsServerPort = 8000;
const webSocketServer = require("websocket").socket
const http = require("http")


// spinning the http server

const server = http.createServer();
server.listen(webSocketServer);
console.log("listening on port 8000")

const wsServer = new webSocketServer({
    httpServer: server
})

const clients = {};

// Generate unique user ids

const getUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x1000).toString(16).toString(1)
    return s4() + s4() + "-" + s4()
}

wsServer.on("request", function(request) {
    var userID = getUniqueID()
    console.log((new Date()) +  " Received a new connection from origin" + request.origin + ".")

    const connection = request.accept(null, request.origin)

    clients[userID] = connection;
    
    console.log("Connected to: ", clients[clients])
})