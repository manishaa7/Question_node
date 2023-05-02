// Implement a client server application with the
//  express,http and socket.io modules for the following 
//  scenario
// a)Display the student details in the 
// server console sfter getting a request 
// (connection) from a client.


//server side code

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Client connected.');

  const studentDetails = {
    name: 'John Doe',
    rollNo: '2021001',
    age: 20,
    gender: 'Male',
    address: '123 Main Street, Anytown, USA',
  };
  socket.on('createMessage', (newMessage)=>{
    console.log('newMessage', newMessage);
    });
    
  console.log('Student Details:', studentDetails);

  socket.on('disconnect', () => {
    console.log('Client disconnected.');
  });
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  });
server.listen(3000, () => {
  console.log('Server listening on port 3000.');
});
