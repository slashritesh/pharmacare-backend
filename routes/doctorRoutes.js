import express from 'express'
import { getAlldoctors } from '../controllers/doctorsController.js'
const doctorRoutes = express.Router()

doctorRoutes.route('/').get(getAlldoctors)


export default doctorRoutes