//http.js
const http = require('http');

const onRequest = (request, response) => {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/Plain"});
    response.write("Hello world");
    response.end();
};

http.createServer(onRequest).listen(3000);
console.log("Serve has started");