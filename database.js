const pg = require('pg');

var config = {
  user: 'nat',
  database: 'facebook',
  password: '',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000,
};

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
