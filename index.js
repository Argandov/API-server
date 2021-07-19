const express = require('express')
const app = express()
const pool = require('./database');

// DATABASE SAMPLE:
//
// Container name: dockerdb 
// Database name: Learning 
// Row name: technologies
//

app.use(express.json());

app.get('/learning', async (req, res) => {
		try {
				// Connection:
				console.log('[+] Querying the server...');
				const conn = await pool.getConnection();
				// SQL queries:
				const sql_query = 'SELECT * FROM learning';
				const rows = await conn.query(sql_query);
				// Client response:
				console.log('[+] GET request made to the server...');
				res.status(200).json(rows);
		} catch (error) {
				console.log(error);
		}
});

app.post('/new', async (req, res) => {
		// Connection:
		console.log('[+] Received POST request...');
		const conn = await pool.getConnection();
		// SQL queries:
		const sql_query = 'INSERT INTO learning VALUE (?)';
		// request has body/name properties
		// console.log('************************')
		// For troubleshooting:
		// console.log(req);
		// console.log('************************')
		const result = await conn.query(sql_query, [req.body.technology]);
		// Client response:
		console.log('[+] Success POST request');
		console.log('    [i] *******REQ BODY*********')
		console.log('    [i]', req.body);
		console.log('    [i]************************')
		res.status(200).json(result);
});

app.listen(3000, () => {
		console.log('[+] Server up on port', 3000);
});
