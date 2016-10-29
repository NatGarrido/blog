const pg = require('pg');
var config = require('./config.js');

var pool = new pg.Pool(config);

pool.connect( function (err, client, done) {
	if (err) {
		console.log('error -> ', err);
		return;
	}

	client.query('SELECT * FROM post', function (err, result) {
		if (err) {
			console.log(err);
			return;
		}

		console.log('resultado de la consulta --> ', result.rows);
		

		client.end(function (err) {
	      if (err) throw err;
	    });
	})
});
