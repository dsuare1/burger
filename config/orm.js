var connection = require('../config/connection.js');

function printQuestionMarks(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push('?');
	}
	return arr.toString();
}

var orm = {
	selectAll: function(table, cb) {
		var queryString = 'SELECT * FROM ' + table + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(table, queryCondition, cb) {
		var queryString = 'UPDATE ' + table + ' SET devoured = true  WHERE ' + queryCondition + ';';
		console.log('update query string: ' + queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function(table, cols, vals, cb) {
		var queryString = 'INSERT INTO ' + table + ' (' + cols.toString() + ') VALUES (' + printQuestionMarks(vals.length) + ') ';
		console.log('create query string: ' + queryString);
		connection.query(queryString, vals, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
}

module.exports = orm;