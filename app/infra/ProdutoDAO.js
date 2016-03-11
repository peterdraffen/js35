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

ProdutoDAO.prototype.listar = function(callback) {
	this.connection.query('SELECT * FROM livros', callback);
};

ProdutoDAO.prototype.salvar = function(produto, callback) {
	this.connection.query('INSERT INTO livros SET ?', produto, callback);
};

function ProdutoDAO(connection) {
	this.connection = connection;
};

module.exports = function () {
	return ProdutoDAO;
};