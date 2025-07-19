console.log('Dossier courant:', __dirname);

try {
  const ctrl = require('../controllers/societiesController');
  console.log('Module chargé avec succès:', ctrl);
} catch (err) {
  console.error('Erreur require:', err.message);
}
