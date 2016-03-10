PromocaoDAO.prototype.listar = function(callback) {
	this.connection.query('SELECT * FROM promocoes', callback);
};

PromocaoDAO.prototype.salvar = function(promocao, callback) {
	this.connection.query('INSERT INTO promocoes SET ?', promocao, callback);
};

function PromocaoDAO(connection) {
	this.connection = connection;
};

module.exports = function () {
	return PromocaoDAO;
};