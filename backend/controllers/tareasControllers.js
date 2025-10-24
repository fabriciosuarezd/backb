const asyncHandler = require('express-async-handler')
const Tarea = require('../models/tareasModel')

const getTareas = asyncHandler(async (req,res)=> {
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const createTareas = asyncHandler(async(req,res)=> {
    if(!req.body.texto){
        res.status(400)
        throw new Error('Por favor teclea un texto')
    }

    const tarea = await Tarea.create({
        texto: req.body.texto
    })

    res.status(201).json(tarea)

})

const updateTareas = asyncHandler(async(req,res)=> {
    res.status(200).json({"mensaje":"getTareas"})
})

const deleteTareas = asyncHandler(async(req,res)=> {
    res.status(200).json({"mensaje":"getTareas"})
})

module.exports = {
    getTareas,
    createTareas, 
    updateTareas, 
    deleteTareas
}