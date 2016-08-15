var express = require('express'),
	fs 		= require('fs'),
    pug     = require('pug'),
	app     = express(),
    router  = express.Router(),
    request = require('request'),
    bodyParser = require('body-parser'),
    http = require('http'),
	config = require('./config');


app.listen(process.env.PORT || config.port );
//View engine
app.use(router);
app.set('views', __dirname + '/views')
app.use(express.static(__dirname + '/public'))
app.set('view engine', 'pug');

// Add POST, PUT, DELETE methods to the app
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));

//Funcion para crear JSON
router.get('/', function (req, res) {
	
	res.render('index', {
		env : config.env
	});
});

console.log('Server started, please go to http://localhost:'+config.port+'\n');
