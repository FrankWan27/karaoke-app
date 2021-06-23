import React from 'react';
import ReactDOM from 'react-dom';
import SocketClient from './socket.js'
import App from './app.js'
      
ReactDOM.render(<App />, document.getElementById('root'));

const socket = new SocketClient()