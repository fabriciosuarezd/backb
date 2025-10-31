const bcrypt = require ('bcryptjs')
const jwt = require ('jsonwebtoken')
const asyncHandler = require ('express-async-handler')
const User = require('../models/usersModel')

const login = (req, res) => {
    res.status(200).json({message: 'login'})
}

const register = asyncHandler( async(req, res) => {
    const {nombre, email, password} = req.body

    if(!nombre || !email || !password){
        res.status(400)
        throw new Error('Faltan datos')
    }

    //verificar si existe ese usuario en la bd
    const userExiste = await User.findOne({email})

    if (userExiste) {
        res.status(400)
        throw new Error('Ese usuario ya existe')
    } else {
        //hash
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //crear el usuario
        const user = await User.create({
            nombre,
            email,
            password: hashedPassword
        })

        if (user) {
            res.status(201).json({
                _id: user.id,
                nombre: user.nombre,
                email: user.email,
                password: user.password
            })
        } else {
            res.status(400)
            throw new Error('No se pudieron guardar los datos')
        }
    }



})

const data = (req, res) => {
    res.status(200).json({message: 'data'})
}

module.exports = {
    login, register,data
}