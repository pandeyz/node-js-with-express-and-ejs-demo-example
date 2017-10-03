// https://scotch.io/tutorials/use-ejs-to-template-your-node-application
// Application routes are defined here

var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
	var response = {name: 'Mayank Pandey', dept: 'IT'}
	res.render('index', {
		response: response
	});
});

app.listen(8080);
console.log('8080 is the magic port');