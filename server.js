var port = process.env.PORT || 8000;
var environment = process.env.Environment;

var http = require("http");

var server = http.createServer(function(request, response) {
response.writeHead(200, {"Content-Type": "text/html"});
response.write("<!DOCTYPE html>");
response.write("<html>");
response.write(`<head><title>${environment}</title></head>`);
response.write("<body>");
response.write(`<p>Enviroment = ${environment}</p>`);
response.write("</body>");
response.write("</html>");
response.end();
});

server.listen(port);