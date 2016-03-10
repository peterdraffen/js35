module.exports = function(app) {

	var controller = app.controllers.times;

	app.get('/times', controller.lista);

};