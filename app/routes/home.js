module.exports = function(app) {

	app.get('/', function(request, response) {
		var connection = app.infra.connectionFactory();

		var dao = new app.infra.ProdutoDAO(connection);

		dao.listar(function(erro, produtos) {
			response.format({
				html: function() {
				response.render('home/index', {
						livros: produtos
					});
				}
			});
		});

		connection.end();
	});

};