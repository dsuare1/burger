var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// load stylesheets, imgs, etc.
app.use(express.static(process.cwd() + '/public'));

// parse incoming responses into body
app.use(bodyParser.urlencoded({
	extended: false
}));

// hack the form methods to be more than GET and POST
app.use(methodOverride('_method'));

// handlebars
var exphbs = require('express-handlebars');
// sets the 'main.handlebars' file to be the default
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// reference the 'burgers_controller.js' file to handle all the routing endpoints
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

// set up the Express Server (app) to listen on PORT 8000
var PORT = 8000;
app.listen(PORT, function() {
	console.log('Express server listening on PORT: ' + PORT);
});

// ********************************************************************************
var Yelp = require('yelp');

var yelp = new Yelp({
  consumer_key: '8NSny5oze2kJA1bgDMiRsg',
  consumer_secret: '6GUmVkstIFkHrWLfvGYJ8cZkPIM',
  token: 'BSdlsBCoNtcnMX5viC21Cai0mkUOhMg1',
  token_secret: '3lNLuPkzBIWoo6imW5Bl7xqN8Yc',
});


// See http://www.yelp.com/developers/documentation/v2/search_api
// yelp.search({ term: 'burgers', location: 'Austin' })
// .then(function (data) {
//   console.log("yelp response: " + JSON.stringify(data, null, 2));
// })
// .catch(function (err) {
//   console.error(err);
// });
