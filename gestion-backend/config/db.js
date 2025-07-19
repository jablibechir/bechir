const sql = require('mssql');

const config = {
  server: '192.168.1.19',
  port: 1433,
  user: 'sa',
  password: '2020',
  database: 'GestionMultiEntreprise',
 
};

async function testConnection() {
  let pool;
  try {
    pool = await sql.connect(config);
    await pool.close();
    return true;
  } catch (err) {
    if (pool) await pool.close();
    throw err;
  }
}

module.exports = {
  sql,
  config,
  testConnection,
};
