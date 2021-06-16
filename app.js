const express = require('express')
const app = express()
const serv = require('http').Server(app)
const io = require('socket.io')(serv, {})

var targets = []
const socketList = {}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})
app.use('/client', express.static(__dirname + '/client'))

serv.listen(process.env.PORT || 2345)
console.log("Server started")

io.sockets.on('connection', (socket) => {
    socket.id = Math.random()
    socketList[socket.id] = socket

    console.log('client#' + socket.id + ' connected')

    socket.on('request-song', (data) => {
        console.log(data.song)
    })
    socket.on('disconnect', () => {
        console.log('client#' + socket.id + ' disconnected')
        delete socketList[socket.id]
    })
})