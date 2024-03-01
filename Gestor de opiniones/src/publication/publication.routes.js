import express from 'express'
import { add, deleteP, update } from './publication.controller.js'
import { validateJwt } from '../middleware/validate-jwt.js'

const api = express.Router()

//Rutas privadas (usuarios logeados)
api.post('/add', [validateJwt], add)
api.delete('/deleteP/:id', [validateJwt], deleteP)
api.put('/update/:id', [validateJwt], update)

export default api