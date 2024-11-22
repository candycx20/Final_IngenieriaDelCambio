//importamos el Modelo
import DatoModel from "../models/DatoModel.js";

//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllDatos = async (req, res) => {
    try {
        const datos = await DatoModel.findAll()
        res.json(datos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getDato = async (req, res) => {
        try {
            const dato = await DatoModel.findAll({
                where:{ id:req.params.id }
            })
            res.json(dato[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro
export const createDato = async (req, res) => {
    try {
       await DatoModel.create(req.body)
       res.json({
           "message":"¡Registro creado correctamente!"
       })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Actualizar un registro
export const updateDato = async (req, res) => {
    try {
        await DatoModel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Eliminar un registro
export const deleteDato = async (req, res) => {
    try {
        await DatoModel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}