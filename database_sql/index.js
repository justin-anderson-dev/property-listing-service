require('dotenv').config();
const { Pool } = require('pg');

const HOST = process.env.PGHOST;
const PORT = process.env.PGPORT;
const DATABASE = process.env.PGDATABASE;
const USER = process.env.PGUSER;

const options = {
  user: USER,
  host: HOST,
  database: DATABASE,
  password: '',
  port: PORT,
};

module.exports.pool = new Pool(options);

// module.exports = {
//   query: (text, params, callback) => {
//     const start = Date.now();
//     return pool.query(text, params, (err, res) => {
//       const duration = Date.now() - start;
//       console.log('executed query', { text, duration, rows: res.rowCount });
//       callback(err, res);
//     })
//   },
// };
