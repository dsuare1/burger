var orm = require('../config/orm.js');

var burgers = {
	selectAll: function (cb) {
		orm.selectAll('cats', function (res) {
			cb(res);
		});
	},
	insertOne: function (cols, vals, cb) {
		orm.insertOne('cats', cols, vals, function (res) {
			cb(res);
		});
	},
	updateOne: function (objColVals, condition, cb) {
		orm.updateOne('cats', objColVals, condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;