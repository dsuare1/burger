var express = require('express');
// var methodOverride = require('method-override');
// var bodyParser = require('body-parser');

var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = { burgers: data };
		res.render('index', hbsObj);
	})
});

router.put('/burgers/update/:id', function(req, res) {
	var queryCondition = 'id = ' + req.params.id;

	console.log('query condition: ', queryCondition);

	burger.updateOne(queryCondition, function() {
		res.redirect('/');
	});
});

router.put('/burgers/replace/:id', function(req, res) {
	var queryCondition = 'id = ' + req.params.id;

	console.log(queryCondition);

	burger.replaceOne(queryCondition, function() {
		res.redirect('/');
	});
});

router.delete('/burgers/delete/:id', function(req, res) {
	var queryCondition = 'id = ' + req.params.id;

	console.log(queryCondition);

	burger.deleteOne(queryCondition, function() {
		res.redirect('/');
	})
})

router.post('/burgers/create', function(req, res) {
	burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function() {
		res.redirect('/');
	});
});

module.exports = router;




























