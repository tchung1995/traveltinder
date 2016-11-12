var data = require("../data.json");

exports.searchCountry = function(req, res) {
 //api call
 var optionsget = {
 	host : 'api.sandbox.amadeus.com', 
	port : 3000,
	path : '/v1.2/hotels/search-circle?apikey=71WDAbbKpAULtxCXPqhIHAuAoKo59GIO&latitude=36.0857&longitude=-115.1541&radius=42&check_in=2016-11-15&check_out=2016-11-16', 
	method : 'GET' 
 };
 var reqGET = https.get(optionsget, function(res) {
 console.log("statusCode: ", res.statusCode);
 console.log("headers: ", res.headers);   
 res.render('country');
});

}
