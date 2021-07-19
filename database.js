const mariadb = require('mariadb')

const pool = mariadb.createPool({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',			// Change this
		password: '1234',		// Change this
		database: 'dockerdb',	// Name of the docker database
});

async function getConnection() {
		try {
				console.log('[+] Connecting to dockerdb...');
				const connection = await pool.getConnection();
				return connection;
		} catch (error) {
				console.log(error);
}}

// Exports an object, or function object to work with
module.exports = {getConnection}
