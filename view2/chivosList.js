// serverBienvenida.js
// view2/serverBienvenida.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Importa las rutas de chivos
import chivosRoutes from '../routes/chivosRoutes.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno
dotenv.config({ path: '../.env' });

const app = express();
const PORT = 8081;

// Conectarse a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conexión a MongoDB desde serverBienvenida exitosa'))
  .catch((error) => console.error('❌ Error al conectar a MongoDB:', error.message));

// Servir archivos estáticos (como bienvenida.html)
app.use(express.static(path.join(__dirname)));

// Usar las rutas importadas
app.use('/', chivosRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor de bienvenida corriendo en http://localhost:${PORT}`);
});
