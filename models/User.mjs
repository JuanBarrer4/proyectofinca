import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  usuario: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: { type: String, enum: ['dueño', 'veterinario', 'encargado'], required: true }
});

const User = mongoose.model('User', userSchema);

export default User;
