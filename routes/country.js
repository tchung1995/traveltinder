var data = require("../data.json");
//var request = require('request');
exports.searchCountry = function(req, res) {
var country = req.params.name;
var longi;
var lati;
 for (i=0; i < data.friends.length; i++) {
 	if (data.friends[i].name == country) {
 		longi=data.friends[i].longitude;
 		lati=data.friends[i].latitude;
 		console.log(country + " " + longi + " " + lati);
 	}
 }
 //console.log(country);







 res.render('country',country);
};

