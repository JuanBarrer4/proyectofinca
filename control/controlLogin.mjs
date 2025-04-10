import User from '../models/User.mjs';

export const welcome = (req, res) => {
  res.send('API LISTA!');
};

export const loginUser = async (req, res) => {
  const { usuario, contraseña } = req.body;
   

  try {
    const user = await User.findOne({ usuario, contraseña });

    if (!user) {
      return res.status(401).json({ mensaje: 'Credenciales incorrectas' });
    }

    if ( user === null ) {
      return res.status(401).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json({
      mensaje: `¡Bienvenido ${user.nombre}! Tu rol es: ${user.rol}`,
      nombre: user.nombre,
      usuario: user.usuario,
      rol: user.rol
    });

  } catch (error) {
    //console.error('Error en login:', error.message); //error de consola
    res.status(500).json({ mensaje: 'Error del servidor', error: error.message }); 
  }
};

