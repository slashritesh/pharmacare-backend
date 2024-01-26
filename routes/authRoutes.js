import express from 'express'
import { login, register } from '../controllers/authController.js'
const authRoutes = express.Router()

authRoutes.route('/signin').post(register)
authRoutes.route('/login').post(login)


export default authRoutes