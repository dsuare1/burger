var mysql = require('mysql');

var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'	
	},
	livehost: {
		port: 3306,
		host: '',
		user: '',
		password: '',
		database: ''
	}
}

var connection = mysql.createConnection(source.localhost);

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected to MySQL Database as id ' + connection.threadId);
});

module.exports = connection;