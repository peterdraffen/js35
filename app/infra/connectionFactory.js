var mysql = require('mysql');

module.exports = function () {
	return function createConnection() { 
		return mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '',
			database: 'casadocodigo'
		});
	};
};
