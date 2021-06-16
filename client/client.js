const socket = io() 

socket.on('refresh-song-queue', (data) => {
    console.log("Currently playing:\n" + data)
})

function testInput(str) {
    socket.emit('request-song', {song: str})
}