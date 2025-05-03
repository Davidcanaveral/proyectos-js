const express = require('express');
const router = express.Router();
const db = require('../db');


// Obtener todas las categorías
router.get('/', async (req, res) => {
    try {
      const [results] = await db.query('SELECT * FROM categorias ORDER BY nombre ASC;');
      res.json(results);
    } catch (error) {
      console.error('Error en GET /categorias:', error);
      res.status(500).json({ error: 'Error al obtener categorías' });
    }
});

module.exports = router;