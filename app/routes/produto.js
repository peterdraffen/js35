module.exports = function(app) {

	app.get('/produtos', function(request, response) {
		var connection = app.infra.connectionFactory();

		var dao = new app.infra.ProdutoDAO(connection);

		dao.listar(function(erro, produtos) {
			response.render('produtos/lista', {
				lista: produtos
			});
		});

		connection.end();

	});

	app.get('/produtos/form', function(request, response) {
		response.render('produtos/form', {
				produto: {}
		});
	});

	app.post('/produtos', function(request, response) {
		var produto = request.body;

		var connection = app.infra.connectionFactory();
		var dao = new app.infra.ProdutoDAO(connection);

		dao.salvar(produto, function() {
			response.render('produtos/salvo');
		});

	});

};