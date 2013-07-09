var express = require('express');

var app = express.createServer(express.logger());

<<<<<<< HEAD
var fs = require('fs');

app.get('/', function(request, response) {
  var content = fs.readFileSync("index.html");
  response.send(content.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
=======
app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
>>>>>>> 93f0c258e90afebc3670e7a63f14dafb20a9036a
