const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

// Importar rutas
const recetasRoutes = require('./routes/recetas');
const categoriasRoutes = require('./routes/categorias');

app.use(cors());
app.use(express.json());

// Usar rutas
// Endpoint raíz general
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Recetas de Cocina 🍲🍰. Consulta /api/recetas para ver las recetas.');
});

app.use('/api/recetas', recetasRoutes);
app.use('/api/categorias', categoriasRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
