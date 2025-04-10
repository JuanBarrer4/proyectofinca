// createUsers.js
// createUsers.js
import '../data/user-db.js'; // conecta a MongoDB Atlas
import User from '../models/User.mjs';

async function crearUsuarios() {
  await User.deleteMany(); // ⚠️ Elimina todos los usuarios, cuidado si ya tienes datos

  const usuarios = [
    { nombre: 'Juan', usuario: 'admin', contraseña: 'admin', rol: 'dueño' },
    { nombre: 'Samuel', usuario: 'sam1', contraseña: 'abcd', rol: 'veterinario' },
    { nombre: 'Carlos', usuario: 'carl1', contraseña: '1234', rol: 'encargado' }
  ];

  try {
    await User.insertMany(usuarios);
    console.log('✅ Usuarios creados exitosamente');
  } catch (err) {
    console.error('❌ Error al crear usuarios:', err);
  } finally {
    process.exit();
  }
}

crearUsuarios();
