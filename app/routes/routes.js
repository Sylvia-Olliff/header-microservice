'use strict';

var path = process.cwd();

module.exports = function (app, head) {
	
	var requestTime = function (req, res, next) {
		process.env.TZ = 'USA/New York';
		req.requestTime = new Date();
		next();
	};
	
	app.use(requestTime);

	app.get('/', requestedOn, head.capture, function(req, res) {
		res.send(req.result);
	});
	
	app.post('/*', requestedOn, function(req, res) {
		res.redirect('/');
	});
	
	app.get('/*', requestedOn, function(req, res) {
		res.redirect('/');
	});
};

function requestedOn(req, res, next) {
	
	var log = 'Requested at ' + req.requestTime;
	
	console.log(log);
	return next();
}
