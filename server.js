var http = require('http');

var server = http.createServer(function(request, response){
    console.log(request.method);
    response.writeHead(200, {
        "Connection": "close",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin":"*"
    });
    response.end("<h1>Hello World</h1>");
});

server.listen(9090);