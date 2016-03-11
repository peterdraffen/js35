module.exports = function() {
	console.log(process.env.NODE_ENV);
	return require('./env/' + process.env.NODE_ENV);
}