// Create a web server application with the http
//  module for the following scenario:
// a)Create a server nodejs application to verify 
// whether the number is prime or not.
// B)Accept a number from the input text field
//  of the client page and provide the output values
//   as a response with the click event on button.

const http = require('http');
const url = require('url');

function isPrime(num){
    for(let i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num !== 1;
}

const server = http.createServer(function(req, res){
    const page = url.parse(req.url, true).pathname;

    if(page === '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <!DOCTYPE html>
            <html>
                <head>
                    <title>Prime Number Checker</title>
                </head>
                <body>
                    <h1>Prime Number Checker</h1>
                    <form action="/checkprime" method="get">
                        <label>Enter a number:</label>
                        <input type="number" name="num">
                        <input type="submit" value="Check">
                    </form>
                </body>
            </html>
        `);
        res.end();
    }

    else if(page === '/checkprime'){
        const query = url.parse(req.url, true).query;
        const num = parseInt(query.num);
        if(isNaN(num)){
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.write('Invalid input. Please enter a number.');
            res.end();
        }
        else{
            if(isPrime(num)){
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(`${num} is a prime number.`);
                res.end();
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(`${num} is not a prime number.`);
                res.end();
            }
        }
    }

    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Page not found.');
        res.end();
    }
});

server.listen(3000);
console.log('Server running at http://localhost:3000/');
