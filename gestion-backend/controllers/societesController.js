const { poolConnect, sql } = require('../config/db');

exports.getAllSocieties = async (req, res) => {
  try {
    await poolConnect; // assure que la connexion est prête
    const request = new sql.Request();
    const result = await request.query('SELECT code_societe, nom_societe FROM Societes');
    res.json(result.recordset);
  } catch (err) {
    console.error('Erreur lors du fetch des sociétés:', err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
