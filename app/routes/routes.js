'use strict';

var path = process.cwd();

module.exports = function (app, dateCheck) {
	
	var requestTime = function (req, res, next) {
		process.env.TZ = 'USA/New York';
		req.requestTime = new Date();
		next();
	};
	
	app.use(requestTime);

	app.get('/', requestedOn, function(req, res) {
		res.sendFile(path + '/public/index.html');
	});
	
	app.post('/*', requestedOn, dateCheck.parse, function(req, res) {
		res.send(req.date);
	});
	
	app.get('/*', requestedOn, dateCheck.parse, function(req, res) {
		res.send(req.date);
	});
};

function requestedOn(req, res, next) {
	
	var log = 'Requested at ' + req.requestTime;
	
	console.log(log);
	return next();
}
