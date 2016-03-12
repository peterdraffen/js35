var wrap = require('co-express');

module.exports = function(app) {

	var controller = app.controllers.produto;

	app.get('/produtos', wrap(controller.lista));

	app.post('/produtos', wrap(controller.salva));

	app.put('/produtos',  controller.atualiza);

	app.get('/produtos/form', controller.obterFormulario);

	app.get('/produtos/form/:id', controller.obterPorId);

};