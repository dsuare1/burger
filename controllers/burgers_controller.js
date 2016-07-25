var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var router = express.Router();

router.get('/', function(req, res) {
	burgers.selectAll('burgers', function() {
		cd(res);
	})
})

module.exports = router;