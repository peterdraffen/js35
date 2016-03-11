var mysql = require('mysql');

module.exports = function () {
	return function createConnection() { 
		var env = require('../../config/config')()();
		console.log(env);
		return mysql.createConnection(env);
	};
};
