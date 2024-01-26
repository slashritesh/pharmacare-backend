import  express from "express";
import { getAllUsers } from "../controllers/userController.js";
const userRoutes = express.Router()


userRoutes.route('/').get(getAllUsers)

export default userRoutes 