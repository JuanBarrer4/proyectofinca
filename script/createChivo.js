import '../data/user-db.js'; // Conexión a MongoDB
import Chivo from '../models/Chivo.mjs'; // Modelo completo

async function crearChivos() {
    await Chivo.deleteMany(); // ⚠️ Limpia la colección para evitar duplicados en pruebas

    const chivos = [
        {
            codigo: 'CHV001',
            nombre: 'Copo de Nieve',
            sexo: 'hembra',
            raza: 'Alpina',
            peso: 45,
            fechaNacimiento: new Date('2022-03-15'),
            fechaIngreso: new Date('2022-06-01'),
            salud: 'sano',
            gestante: true,
            estadoReproductivo: 'preñada',
            observaciones: 'Chiva muy dócil y buena producción de leche.',
            historialSalud: []
        },
        {
            codigo: 'CHV002',
            nombre: 'Trueno',
            sexo: 'macho',
            raza: 'Boer',
            peso: 60,
            fechaNacimiento: new Date('2021-11-20'),
            fechaIngreso: new Date('2022-01-10'),
            salud: 'sano',
            gestante: false,
            estadoReproductivo: 'desconocido',
            observaciones: 'Muy activo, buen reproductor.',
            historialSalud: []
        },
        {
            codigo: 'CHV003',
            nombre: 'Luna',
            sexo: 'hembra',
            raza: 'Saanen',
            peso: 38,
            fechaNacimiento: new Date('2023-01-05'),
            fechaIngreso: new Date('2023-03-12'),
            salud: 'enfermo',
            gestante: false,
            estadoReproductivo: 'vacía',
            observaciones: 'En tratamiento por parásitos.',
            historialSalud: [
                {
                    fecha: new Date('2024-03-10'),
                    descripcion: 'Diarrea y pérdida de peso',
                    tratamiento: 'Desparasitante oral durante 5 días'
                }
            ]
        },
        {
            codigo: 'CHV004',
            nombre: 'Rayo',
            sexo: 'macho',
            raza: 'Criolla',
            peso: 67,
            fechaNacimiento: new Date('2020-09-30'),
            fechaIngreso: new Date('2021-02-15'),
            salud: 'sano',
            gestante: false,
            estadoReproductivo: 'desconocido',
            observaciones: 'Ágil y dominante.',
            historialSalud: []
        },
        {
            codigo: 'CHV005',
            nombre: 'Estrella',
            sexo: 'hembra',
            raza: 'Alpina',
            peso: 42,
            fechaNacimiento: new Date('2022-05-10'),
            fechaIngreso: new Date('2022-08-25'),
            salud: 'sano',
            gestante: true,
            estadoReproductivo: 'preñada',
            observaciones: 'Segunda gestación confirmada.',
            historialSalud: []
        },
        {
            codigo: 'CHV006',
            nombre: 'Niebla',
            sexo: 'hembra',
            raza: 'Saanen',
            peso: 0,
            fechaNacimiento: new Date('2021-07-07'),
            fechaIngreso: new Date('2021-10-01'),
            salud: 'muerto',
            gestante: false,
            estadoReproductivo: 'vacía',
            observaciones: 'Murió por complicaciones post-parto.',
            historialSalud: [
                {
                    fecha: new Date('2023-11-25'),
                    descripcion: 'Fiebre y debilidad',
                    tratamiento: 'Antibiótico y suero intravenoso'
                }
            ]
        },
        {
            codigo: 'CHV007',
            nombre: 'Sol',
            sexo: 'hembra',
            raza: 'Boer',
            peso: 36,
            fechaNacimiento: new Date('2023-06-01'),
            fechaIngreso: new Date('2023-08-15'),
            salud: 'sano',
            gestante: false,
            estadoReproductivo: 'vacía',
            observaciones: 'Chivita joven, aún no se ha preñado.',
            historialSalud: []
        },
        {
            codigo: 'CHV008',
            nombre: 'Relámpago',
            sexo: 'macho',
            raza: 'Criolla',
            peso: 55,
            fechaNacimiento: new Date('2022-08-17'),
            fechaIngreso: new Date('2022-11-01'),
            salud: 'enfermo',
            gestante: false,
            estadoReproductivo: 'desconocido',
            observaciones: 'Tratamiento en curso por tos persistente.',
            historialSalud: [
                {
                    fecha: new Date('2024-02-18'),
                    descripcion: 'Tos crónica',
                    tratamiento: 'Antibióticos en aerosol'
                }
            ]
        },
        {
            codigo: 'CHV009',
            nombre: 'Brisa',
            sexo: 'hembra',
            raza: 'Alpina',
            peso: 40,
            fechaNacimiento: new Date('2022-09-21'),
            fechaIngreso: new Date('2022-12-01'),
            salud: 'sano',
            gestante: false,
            estadoReproductivo: 'vacía',
            observaciones: 'Comportamiento tranquilo.',
            historialSalud: []
        },
        {
            codigo: 'CHV010',
            nombre: 'Tormenta',
            sexo: 'hembra',
            raza: 'Boer',
            peso: 50,
            fechaNacimiento: new Date('2021-12-12'),
            fechaIngreso: new Date('2022-03-01'),
            salud: 'sano',
            gestante: true,
            estadoReproductivo: 'preñada',
            observaciones: 'Gestación avanzada, se espera parto en 2 semanas.',
            historialSalud: []
        }
    ];

    try {
        await Chivo.insertMany(chivos);
        console.log('✅ Chivos creados exitosamente');
    } catch (err) {
        console.error('❌ Error al crear chivos:', err);
    } finally {
        process.exit();
    }
}

crearChivos();
