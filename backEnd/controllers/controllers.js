import initModels from '../models/init-models.js';
import conexion from '../config/dataBase.js';


const llamado = initModels(conexion)

export async function data (req,res) {
    let consulta = await llamado.datos.findAll();
    res.json(consulta);
}
export async function usuarios (req,res) {
    let consulta = await llamado.usuarios.findAll();
    res.json(consulta);
}
export default llamado