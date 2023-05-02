const express=require('express');
const socketIO=require('socket.io');
const http=require('http')
const port=9000
var app=express();
let server = http.createServer(app);
var io=socketIO(server);

// make connection with user from server side
io.on('connection', (socket)=>{
console.log('New user connected');
//emit message from server to user
socket.emit('newMessage', {
from:'abcd',
text:'hello',
createdAt:123
});

// listen for message from user
socket.on('createMessage', (newMessage)=>{
console.log('newMessage', newMessage);
});

// when server disconnects from user
socket.on('disconnect', ()=>{
console.log('disconnected from user');
});
});

app.get("/", (req, res) => {
res.sendFile(__dirname + "/client-side.html");
});

server.listen(port);