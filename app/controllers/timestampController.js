var moment = require("moment");

module.exports = {
    parse : function(req, res, next) {
        var potentialDate = decodeURI(req.url);
        console.log(potentialDate);
        potentialDate = potentialDate.substring(1, potentialDate.length);
        console.log(potentialDate);
        if (moment(potentialDate).isValid()) {
            req.date = {
                unix : moment(potentialDate).unix(),
                natural : moment(potentialDate).format("MMMM Do YYYY")
            }
        } else if (moment(moment.unix(parseInt(potentialDate))).isValid()) {
            req.date = {
                unix : potentialDate,
                natural : moment(moment.unix(parseInt(potentialDate))).format("MMMM Do YYYY")
            }
        } else {
            req.date = {
                unix : null,
                natural : null
            }
        }
        
        next();
    }
}