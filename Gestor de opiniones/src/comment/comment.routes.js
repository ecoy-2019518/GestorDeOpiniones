import express from 'express'
import { add, deleteC, update } from './comment.controller.js'
import { validateJwt } from '../middleware/validate-jwt.js'

const api = express.Router()

//Rutas privadas
api.post('/add', [validateJwt], add)
api.put('/update/:id', [validateJwt], update)
api.delete('/deleteC/:id', [validateJwt], deleteC)

export default api