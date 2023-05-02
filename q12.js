// Implement a nodejs application to create a
// writable stream with a new sample .txt file and 
// perform the following task
// A)Find the prime numbers up to 100 
// and write the values to the sample.txt file with 
// the writable stream.
// B)Display the message”Task Completed”at the 
// end on the console window.

const fs = require('fs');

// Create a writable stream to write data to the file
const writableStream = fs.createWriteStream('sample.txt');

// Function to check if a number is prime or not
function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// Loop through the numbers from 1 to 100 and write the prime numbers to the file
for (let i = 1; i <= 100; i++) {
  if (isPrime(i)) {
    writableStream.write(i + '\n'); // Write the prime number to the file
  }
}

// Display the message "Task Completed" on the console when writing is complete
writableStream.on('finish', () => {
  console.log('Task Completed');
});

// End the writable stream
writableStream.end();
