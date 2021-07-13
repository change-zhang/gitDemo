//我是b分支
//我是appjs
var express = require('express');
var app = express();
app.listen(8080);

app.use(express.static("public"));