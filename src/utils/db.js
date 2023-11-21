const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
// To execute queries using the pool:
// pool.query('SELECT * FROM Users', (err, results, fields) => {
//     if (err) {
//         console.error('Error executing query:', err);
//         return;
//     }
//     console.log('Fetched Users:', results);
// });

module.exports = pool;