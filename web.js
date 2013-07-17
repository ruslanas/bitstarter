var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());

var str = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(str.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
