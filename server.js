//Entry point for nodejs app and server logic
//1. import Necessary Modules (http or express) for servers

const http = require('http');

const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        res.write('<h1>Hello, Node.js HTTP Server!</h1>');
        res.end();
});

const port = 3000;

server.listen(port, () => {
        console.log(`Node.js HTTP server is running on port ${port}`);
});

