module.exports = function(app) {

	var controller = {};

	controller.lista = function(request, response) {
		var connection = app.infra.connectionFactory();

		var dao = new app.infra.PromocaoDAO(connection);

		dao.listar(function(erro, promocoes) {
			response.format({
				html: function() {
					response.render('promocoes/lista', {
						lista: promocoes
					});
				},
				json: function() {
					response.json(promocoes);					
				}
			});
		});

		connection.end();

	};

	controller.salva = function(request, response) {
		var promocao = request.body;

		request.assert('descricao', 'descricao deve ser preenchido').notEmpty();

		var erros = request.validationErrors();
		if (erros) {
			response.format({
				html: function() {
					response.render('promocoes/form', { validationErrors: erros, promocao: promocao });
				},
				json: function() {
					response.status(400).json(erros);
				}
			});
			return;
		}

		var connection = app.infra.connectionFactory();
		var dao = new app.infra.PromocaoDAO(connection);

		dao.salvar(promocao, function() {
			response.render('promocoes/salvo');
		});

	};

	controller.obterFormulario = function(request, response) {
		response.render('promocoes/form', {
				promocao: {}
		});
	};

	return controller;
};