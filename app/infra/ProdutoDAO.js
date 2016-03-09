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