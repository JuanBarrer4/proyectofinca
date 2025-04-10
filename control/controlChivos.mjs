// controllers/controlChivos.mjs
import Chivo from '../models/Chivo.mjs';

export const obtenerChivos = async (req, res) => {
    try {
        const chivos = await Chivo.find(); // Trae todos los chivos
        res.json(chivos);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los chivos', error: error.message });
    }
};
