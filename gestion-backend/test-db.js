const sql = require('mssql');
const config = require('./config/db');

console.log('🔄 Début du test de connexion...');
console.log('Configuration utilisée:', config);

async function testConnection() {
  try {
    console.log('⏳ Tentative de connexion...');
    await sql.connect(config);
    
    console.log('🔍 Exécution de requête test...');
    const result = await sql.query('SELECT TOP 1 code_societe, nom_societe FROM Societes');
    
    console.log('\n✅ Connexion réussie !');
    console.log('📊 Résultat de la requête:', result.recordset);
    
    return sql.close();
  } catch (err) {
    console.error('\n❌ ERREUR CRITIQUE');
    console.error('Message:', err.message);
    console.error('Code:', err.code);
    console.error('Stack:', err.stack);
    process.exit(1);
  }
}

testConnection()
  .then(() => process.exit(0))
  .catch(() => process.exit(1));