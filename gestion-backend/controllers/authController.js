const db = require('../config/db');
const bcrypt = require('bcrypt');

exports.verifyUserInSociety = async (req, res) => {
  const { login, code_societe } = req.body;

  try {
    // Vérifier si l'utilisateur existe dans la société
    const [user] = await db.query(`
      SELECT * FROM utilisateurs 
      WHERE login = ? AND code_societe = ?
    `, [login, code_societe]);

    if (user.length === 0) {
      return res.status(404).json({ 
        success: false,
        message: 'Utilisateur non trouvé dans cette société' 
      });
    }

    res.status(200).json({ 
      success: true,
      user: user[0] 
    });

  } catch (err) {
    console.error('Erreur vérification utilisateur:', err);
    res.status(500).json({ 
      success: false,
      message: 'Erreur serveur' 
    });
  }
};