import initModels from '../models/init-models.js';
import conexion from '../config/dataBase.js';


const llamado = initModels(conexion)

export async function data (req,res) {
    let consulta = await llamado.datos.findAll();
    res.json(consulta);
}

export function hola (req,res) {
    res.send("como estas");
}
export function adios (req,res) {
    res.send("chao");
}

export default llamado