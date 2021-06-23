const fs = require('fs')
const WebAudioApi = require('web-audio-api')
const path = require('path')
class AudioProcessing {

    constructor() {
        this.context = new WebAudioApi.AudioContext();
        console.log(this.context)
        this.context.outStream = process.stdout

        // this.context.outStream = {write: function(data){
        //     fs.writeFile(path.resolve(__dirname, '../songs/generated.mp3'), data, (err) => {
        //         if (err) { throw err }
        //         console.log('written')
        //     })
        // }} 
    }

    loadFile(fileName) {
        fs.readFile(path.resolve(__dirname, '../songs', fileName), (err, buf) => {
            if (err) throw err
            // this.context.decodeAudioData(buf, (audioBuffer) => {
            //   console.log(audioBuffer)
            // }, function(err) { throw err })
          })
    }

}

module.exports = AudioProcessing