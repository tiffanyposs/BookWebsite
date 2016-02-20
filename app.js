var express = require('express');

var app = express();



app.use(express.static('public'));

	app.get('/', function (req, res) {
	  	res.send(index)
	})


app.listen(8081)

console.log("Alex loves port 8081")

// exports = module.exports = app;