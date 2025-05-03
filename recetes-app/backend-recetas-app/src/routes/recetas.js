const express = require('express');
const router = express.Router();
const db = require('../db');

// Endpoint para obtener todas las recetas con autor, categoría e ingredientes
router.get('/', async (req, res) => {
    try {
        const query = `
        SELECT 
          r.id AS receta_id,
          r.titulo AS receta_nombre,
          ir.url_imagen as imagen,
          u.nombre AS autor,
          c.nombre AS categoria,
          GROUP_CONCAT(CONCAT(i.nombre, ' (', ri.cantidad, ')') SEPARATOR ', ') AS ingredientes
        FROM 
          recetas r
        INNER JOIN 
          users u ON r.usuario_id = u.id
        INNER JOIN 
          categorias c ON r.categoria_id = c.id
        INNER JOIN 
          receta_ingredientes ri ON r.id = ri.receta_id
        INNER JOIN 
          ingredientes i ON ri.ingrediente_id = i.id
          INNER JOIN 
          imagenes_recetas ir ON r.id = ir.receta_id
        GROUP BY 
          r.id, r.titulo, u.nombre, c.nombre
        ORDER BY 
          r.id;
      `;
      const [results] = await db.query(query);
      res.json(results);
    } catch (error) {
        console.error('Error en GET /recetas:', error);
        res.status(500).json({ error: 'Error al obtener recetas' });
    }

});

// Endpoint para obtener todas las recetas por categoría
router.get('/categoria/:id', async (req, res) => {
    try {
        const query = `
        SELECT 
          r.id AS receta_id,
          r.titulo AS receta_nombre,
          ir.url_imagen as imagen,
          u.nombre AS autor,
          c.nombre AS categoria
        FROM 
          recetas r
        INNER JOIN 
          users u ON r.usuario_id = u.id
        INNER JOIN 
          categorias c ON r.categoria_id = c.id
        INNER JOIN 
          imagenes_recetas ir ON r.id = ir.receta_id
        WHERE c.id = ${req.params.id}
        GROUP BY 
          r.id, r.titulo, u.nombre, c.nombre
        ORDER BY 
          r.id;
      `;
      const [results] = await db.query(query);
      res.json(results);
    } catch (error) {
        console.error('Error en GET /recetas:', error);
        res.status(500).json({ error: 'Error al obtener recetas' });
    }

});

// Endpoint para obtener una receta por ID
router.get('/:id', async (req, res) => {
  const recetaId = req.params.id;

  try {
      const query = `
          SELECT 
            r.id AS receta_id,
            r.titulo AS receta_nombre,
            ir.url_imagen AS imagen,
            u.nombre AS autor,
            c.nombre AS categoria,
            GROUP_CONCAT(CONCAT(i.nombre, ' (', ri.cantidad, ')') SEPARATOR ', ') AS ingredientes
          FROM 
            recetas r
          INNER JOIN 
            users u ON r.usuario_id = u.id
          INNER JOIN 
            categorias c ON r.categoria_id = c.id
          INNER JOIN 
            receta_ingredientes ri ON r.id = ri.receta_id
          INNER JOIN 
            ingredientes i ON ri.ingrediente_id = i.id
          INNER JOIN 
            imagenes_recetas ir ON r.id = ir.receta_id
          WHERE r.id = ?
          GROUP BY 
            r.id, r.titulo, u.nombre, c.nombre;
      `;
      const [results] = await db.query(query, [recetaId]);

      if (results.length === 0) {
          return res.status(404).json({ error: 'Receta no encontrada' });
      }

      res.json(results[0]);
  } catch (error) {
      console.error('Error en GET /recetas/:id:', error);
      res.status(500).json({ error: 'Error al obtener la receta' });
  }
});


  
module.exports = router;