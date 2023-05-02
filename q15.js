// Q6 Create a web server application with http 
//module for the following scenario
//a) Create a server node.js application using http 
//module to find the nth Fibonacci number
// b) Accept a number from the input text field of
// the client page and provide the output values as a
//response with the click event on a button.
const http=require('http');
const url=require('url');
const server=http.createServer();
server.on("request",(req,res)=>{
    const page=url.parse(req.url,true)
})
server.listen(4000,()=>{
    console.log("listening to port");
})