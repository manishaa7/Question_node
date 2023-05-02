// Create a nodejs application to display the 
//implementation of events
const Eventemitter=require('events');
const EventEmitter=new Eventemitter();
EventEmitter.on('greet',(name)=>{
    console.log(`Hello, ${name}!`);
})
EventEmitter.emit('greet','Kriti');