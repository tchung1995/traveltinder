var data = require("../data.json");
var request = require('request');

//var router = express.Router();
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

 if(longi == null) {
 	console.log("null longitude");
 }

 if (lati == null) {
 	console.log("null latitude");
 }
 var property;
 var address;
request.get("https://api.sandbox.amadeus.com/v1.2/hotels/search-circle?apikey=71WDAbbKpAULtxCXPqhIHAuAoKo59GIO&"
	+"latitude="+lati+"&longitude="+longi+"&radius=100&check_in=2016-11-21&check_out=2016-11-22", function (err, response, data1) {
        if (response.statusCode != 200) {
        	console.log("error");
        }
        console.log(data1);
        //console.log(data1[results][0][property_name]);
        var hotelinfo = JSON.parse(data1);
        property = hotelinfo["results"][0]["property_name"];
        address = hotelinfo["results"][0]["address"];
        //console.log(hotelInfo[results][0][property_name]);
        console.log(property + address);
         res.render('country', { propertyname:property,
              address:address});
	});

//res.render('country', { propertyname:"property",
//              address:address});
//var data2 = JSON.stringify();

 //console.log(country);








};

