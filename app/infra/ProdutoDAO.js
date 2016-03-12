ProdutoDAO.prototype.buscaPorId = function(id, callback) {
	this.connection.query('SELECT * FROM livros WHERE id = ?', [id], function(err, retorno) {
		callback(err, retorno[0]);
	});
};

ProdutoDAO.prototype.atualiza = function(produto, callback) {
	this.connection.query('UPDATE livros SET ? WHERE id = ?', [produto, produto.id], function(err) {
		callback(err);
	});
};

ProdutoDAO.prototype.listar = function() {
	var that = this;
	return new Promise(function(resolve, reject) {
		that.connection.query('SELECT * FROM livros', function(err, produtos) {
			if (err) {
				reject('Não foi possível listar o produto.');
			} else {
				resolve(produtos);
			}
		});
	});
};

ProdutoDAO.prototype.salvar = function(produto) {
	var that = this;
	return new Promise(function(resolve, reject) {
		that.connection.query('INSERT INTO livros SET ?', produto, function(err) {
			if (err) {
				reject('Não foi possível salvar o produto.');
			} else {
				resolve();
			}
		});
	});
};

function ProdutoDAO(connection) {
	this.connection = connection;
};

module.exports = function () {
	return ProdutoDAO;
};