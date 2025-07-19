const express = require('express');
const router = express.Router();

const societesController = require('../controllers/societesController');

router.get('/', societesController.getAllSocieties);

module.exports = router;
