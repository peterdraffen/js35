module.exports = function() {

	var express = require('express');
	var load = require('consign');
	var bodyParser = require('body-parser');
	var validator = require('express-validator');
	var methodOverride = require('method-override');

	var app = express();

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(express.static('./public'));

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(methodOverride(function(request, response) {
		if (request.body && request.body._method) {
			var method = request.body._method;
			delete request.body._method;
			return method;
		};
	}));
	app.use(validator());

	load({cwd: 'app'})
		.include('infra')
		.then('controllers')
		.then('routes')
		.into(app);


	return app;
};