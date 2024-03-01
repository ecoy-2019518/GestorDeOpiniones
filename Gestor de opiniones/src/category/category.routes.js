import express from 'express'
import { add } from './category.controller.js'
import { validateJwt } from '../middleware/validate-jwt.js'

const api = express.Router()

//Rutas privadas
api.post('/add', [validateJwt], add)

export default api