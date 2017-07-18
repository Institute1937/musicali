var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('i am a tree');
});

app.listen(process.env.PORT || 1886);
console.log("i am running on 1886")
