import mongoose from 'mongoose';

const historialSaludSchema = new mongoose.Schema({
    fecha: { type: Date, required: true },
    descripcion: String,
    tratamiento: String
});

const chivoSchema = new mongoose.Schema({
    nombre: String,
    codigo: { type: String, unique: true },
    sexo: { type: String, enum: ['macho', 'hembra'], required: true },
    raza: String,
    peso: Number,
    fechaNacimiento: Date,
    fechaIngreso: { type: Date, default: Date.now },
    salud: { type: String, enum: ['sano', 'enfermo', 'muerto'], default: 'sano' },
    gestante: { type: Boolean, default: false },
    estadoReproductivo: {
        type: String,
        enum: ['preñada', 'parida', 'vacía', 'desconocido'],
        default: 'desconocido'
    },
    observaciones: String,
    historialSalud: [historialSaludSchema]
});

const Chivo = mongoose.model('Chivo', chivoSchema);

export default Chivo;
