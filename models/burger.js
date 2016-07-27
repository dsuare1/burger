var orm = require('../config/orm.js');

var burger = {
	selectAll: function (cb) {
		// here, 'result' from the orm call has changed name to 'data', and will follow along to the original callback in burger.selectAll, which was invoked by hitting hte HTTP root route
		orm.selectAll('burgers', function (data) {
			cb(data);
		});
	},
	updateOne: function (queryCondition, cb) {
		orm.updateOne('burgers', queryCondition, function (data) {
			cb(data);
		});
	},
	replaceOne: function(queryCondition, cb) {
		orm.replaceOne('burgers', queryCondition, function(data) {
			cb(data);
		})
	},
	deleteOne: function(queryCondition, cb) {
		orm.deleteOne('burgers', queryCondition, function(data) {
			cb(data);
		});
	},
	insertOne: function (cols, vals, cb) {
		orm.insertOne('burgers', cols, vals, function (data) {
			cb(data);
		});
	}
};

module.exports = burger;