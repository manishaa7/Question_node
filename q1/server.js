// <!-- Create a nodejs application to make http request to open a 
// 	feedback form which contains following fields –Name,contact number,
// 	as text fields,Feedback as text area and a submit button.
// 	On submission ,’Thankyou for your feedback message should be 
// 	displayed in a popup box. -->
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		fs.readFile('index.html', 'utf-8', (err, data) => {
			if (err) {
				res.writeHead(500, {'Content-Type': 'text/html'});
				res.end('Error loading index.html');
			} else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.end(data);
			}
		});
	} else if (req.method === 'POST' && req.url === '/') {
		let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			const formData = new URLSearchParams(body);
			const name = formData.get('name');
			const contact = formData.get('contact');
			const feedback = formData.get('feedback');
			console.log(`Name: ${name}\nContact: ${contact}\nFeedback: ${feedback}`);
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(`<script>alert('Thank you for your feedback, ${name}!')</script>`);
		});
	} else {
		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('404 Not Found');
	}
});

server.listen(8000, () => {
	console.log('Server listening on port 8000');
});
