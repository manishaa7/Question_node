// Create an application in nodejs for basic unit 
// converter using Events Basic unit converter(
// Fahernheit to  Celsius)  C=(F-32)*5/9
const EventEmitter = require('events');
const readline = require('readline');
const Eventemitter = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

Eventemitter.on('convert', (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5/9;
  console.log(`${fahrenheit}°F = ${celsius}°C`);
});

rl.question('Enter temperature in Fahrenheit: ', (answer) => {
  Eventemitter.emit('convert', Number(answer));
  rl.close();
});
