'use strict';

var express = require('express');
var routes = require('./app/routes/routes.js');
var session = require('express-session');
var app = express();

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

var head = require("./app/controllers/headerController.js");
routes(app, head);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});