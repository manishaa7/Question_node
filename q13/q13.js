// A)Create a test.txt file and add personal 
// information (name,rollno) in the server system.
// B)Acceses the file and display the content 
// as a response to the client (user)request in the 
// browser.
const http = require('http');
const fs = require('fs');
fs.writeFile('test.txt', 'Name: John Doe\nRoll No: 123456', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File created with sample content.');
  });
const server = http.createServer(function(req, res) {
  // Read the contents of test.txt
  fs.readFile('test.txt', 'utf8', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error reading file');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(`
        <html>
          <head>
            <title>My Personal Information</title>
          </head>
          <body>
            <h1>My Personal Information</h1>
            <p>${data}</p>
          </body>
        </html>
      `);
    }
  });
});

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});
