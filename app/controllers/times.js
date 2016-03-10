module.exports = function(app) {

	var controller = {};

	controller.lista = function(request, response) {
		var times = [
		{
			nome: 'America'
		},
		{
			nome: 'Bangu'
		},
		{
			nome: 'Cabofriense'
		}];

		response.format({
			json: function() {
				response.json(times);					
			}
		});
	};

	return controller;
};