import * as io from "socket.io"
import cors from "cors"
const server = new io.Server(5000, {
    cors: {
        origin: "http://localhost:5000"
    },
})

const products = [
    {
        "title" : "Macbook Air 2021",
        "key" : "A",
        "description" : "Product A",
        "image" : "//placehold.it/256x256"
    },
    {
        "title" : "Ipad pro 2021",
        "key" : "B",
        "description" : "Product B",
        "image" : "//placehold.it/256x256"
    }
]
const votes = []


server.on("connection", (socket) => {
    socket.emit("state", {products, votes})
})