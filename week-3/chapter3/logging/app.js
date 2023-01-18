const express = require("express");
const logger = require("morgan");
const http = require("http");
const app = express();

app.use(logger("short"));

app.use(function(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, World");

});

http/createServer(app).listen(3000);