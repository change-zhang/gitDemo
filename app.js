//我是b分支
//我是appjs
//新的
var express = require('express');
var app = express();
app.listen(8080);

app.use(express.static("public"));