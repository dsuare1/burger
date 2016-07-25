var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObj = { burgers: data };
		res.render('index', hbsObj);
	})
})

module.exports = router;