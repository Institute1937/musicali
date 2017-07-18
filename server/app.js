var express = require('express');
var cors = require('cors')

var app = express();

app.use(cors())

app.get('/', function(req, res) {
  res.json({answer:'i am a tree'});
});

app.listen(process.env.PORT || 1886);
console.log("i am running on 1886 in my container and 8085 to you guys out there")
