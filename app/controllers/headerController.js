module.exports = {
    capture : function(req, res, next) {
        var language = req.headers["accept-language"].split(',')[0];
		
		var ipAddress = req.headers["x-forwarded-for"];
		
		var agent = req.headers['user-agent'];
		var software = agent.substr(agent.indexOf("(") + 1, agent.length);
		var software = software.substr(0, software.indexOf(")"));
		
		req.result = {
		    ipAddress : ipAddress,
		    language : language,
		    software : software
		}
		console.log(req.result);
		next();
    }
}