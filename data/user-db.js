//base local
//import mongoose from 'mongoose';

//mongoose.connect('mongodb://127.0.0.1:27017/fincaFacil')
  //.then(() => console.log('🟢 Conectado a MongoDB'))
  //.catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

  // data/user-db.js

  //base Atlas remota
  import mongoose from 'mongoose';
  import dotenv from 'dotenv';
  
  dotenv.config();
  
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('❌ No se encontró la variable MONGODB_URI en .env');
    process.exit(1);
  }
  
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('✅ Conectado a MongoDB Atlas');
  }).catch((err) => {
    console.error('❌ Error al conectar a MongoDB Atlas:', err);
  });
  