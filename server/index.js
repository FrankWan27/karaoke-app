const express = require('express')
const path = require('path')
const app = express()
const serv = require('http').Server(app)
const io = require('socket.io')(serv, {})

const PORT = process.env.PORT || 3001

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')))

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})

var targets = []
const socketList = {}

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