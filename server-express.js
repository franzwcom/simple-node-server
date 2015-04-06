  /*
*	running express 
*	--------------------------------------------------------
*	Source: Mean machine
*/

var express = require('express');
var app = express();
var path = require('path');

// seinding the html file

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/index.html'));
});

// starting the server

app.listen(1337);
console.log('listening at localhost:1337');