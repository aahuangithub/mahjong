import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import io from 'socket.io-client'
import {SocketProvider} from 'socket.io-react'
import registerServiceWorker from './registerServiceWorker'

const SOCKET_URL = null
let socket = null

if( SOCKET_URL === null){
    socket = io.connect(SOCKET_URL)
    socket.on('connect', ()=>console.log('connected!'))
    ReactDOM.render(<SocketProvider socket={socket}><App /></SocketProvider>, document.getElementById('root'));
}else{
    ReactDOM.render(<App/>, document.getElementById('root'));
}
registerServiceWorker();
