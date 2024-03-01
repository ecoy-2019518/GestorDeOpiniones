import express from 'express'
import { test, register, login, update, editMyPassword } from './user.controller.js'
import { validateJwt } from '../middleware/validate-jwt.js'

const api = express.Router()

//Rutas publicas
api.get('/test', test)
api.post('/register', register)
api.post('/login', login)
//Rutas privadas (usuarios logeados)
api.put('/update/:id', [validateJwt], update)
api.put('/editMyPassword/:id', [validateJwt], editMyPassword)

export default api