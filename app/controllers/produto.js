module.exports = function(app) {

	var controller = {};

	controller.lista = function(request, response) {
		var connection = app.infra.connectionFactory();

		var dao = new app.infra.ProdutoDAO(connection);

		dao.listar(function(erro, produtos) {
			response.format({
				html: function() {
					response.render('produtos/lista', {
						lista: produtos
					});
				},
				json: function() {
					response.json(produtos);					
				}
			});
		});

		connection.end();
	};

	controller.salva = function(request, response) {
		var produto = request.body;

		if (!validaFormulario(produto, request, response)) {
			return;
		}

		var connection = app.infra.connectionFactory();
		var dao = new app.infra.ProdutoDAO(connection);

		dao.salvar(produto, function() {
			response.render('produtos/salvo');
		});
	};

	controller.atualiza = function(request, response) {
		console.log('chamei PUT');

		var produto = request.body;

		if (!validaFormulario(produto, request, response)) {
			return;
		}

		var connection = app.infra.connectionFactory();
		var dao = new app.infra.ProdutoDAO(connection);

		dao.atualiza(produto, function() {
			response.redirect('/produtos');
		});
	};

	controller.obterFormulario = function(request, response) {
		response.render('produtos/form', {
				produto: {}
		});
	};

	controller.obterPorId = function(request, response) {
		var id = request.params.id;

		var connection = app.infra.connectionFactory();
		var dao = new app.infra.ProdutoDAO(connection);

		dao.buscaPorId(id, function(erro, produto) {
			response.format({
				html: function() {
					response.render('produtos/form', { validationErrors: undefined, produto: produto });
				},
				json: function() {
					response.json(produto);					
				}
			});
		});

		connection.end();
	};

	return controller;

	function validaFormulario(produto, request, response) {
		request.assert('titulo', 'titulo deve ser preenchido').notEmpty();
		request.assert('preco', 'preco deve ser um numero').isFloat();

		var erros = request.validationErrors();
		if (erros) {
			response.format({
				html: function() {
					response.render('produtos/form', { validationErrors: erros, produto: produto });
				},
				json: function() {
					response.status(400).json(erros);
				}
			});
			return false;
		}
		return true;
	};
};