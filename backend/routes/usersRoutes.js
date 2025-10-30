const express = require('express')
const router = express.Router()

const {login, register, data} = require('../controllers/usersControllers')

//endpoints publicos
router.post('/login', login)
router.post('/register', register)

//endpoint privado
router.get('/data', data)

module.exports = router