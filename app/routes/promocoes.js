module.exports = function(app) {

	var controller = app.controllers.promocoes;

	app.get('/promocoes', controller.lista);

	app.post('/promocoes', controller.salva);

	app.get('/promocoes/form', controller.obterFormulario);

};