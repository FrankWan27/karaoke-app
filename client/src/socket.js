import { io } from "socket.io-client";

class SocketClient {
    constructor() {
        this.socket = io() 

        this.socket.on('refresh-song-queue', (data) => {
            console.log("Currently playing:\n" + data)
        })

        this.socket.on("connect", () => {
            console.log(this.socket.id);
          });
    }

    
    testInput(str) {
        this.socket.emit('request-song', {song: str})
    }
}

export default SocketClient