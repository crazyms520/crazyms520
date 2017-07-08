//http.js
const http = require('http');
var fs = require('fs');
var file = '';
const onRequest = (request, response) => {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/Plain"});
    response.writeHead(200, {"charset": "utf-8"});
    // response.write("Hello world");
    response.write(file);
    response.end();
};

fs.readFile('../index2.html', (err, data) => {
    if (err) throw err;
    file = data.toString();
});

http.createServer(onRequest).listen(3000);
console.log("Serve has started");