var express = require('express');
var cors = require('cors')

var app = express();

app.use(cors())

app.get('/', function(req, res) {
  res.json({cities:["oslo","cadiz","brighton","lille"]});
});

app.listen(process.env.PORT || 1886);
console.log("i am running on 1886 in my container and 8085 to you guys out there")
