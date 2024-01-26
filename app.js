import express from 'express'
import authRoutes from './routes/authRoutes.js'
import { connectDB } from './db/connect.js'
const app = express()
import dotenv from 'dotenv'
import doctorRoutes from './routes/doctorRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config()

app.use(express.json())
app.use('/api/auth',authRoutes)
app.use('/api/doctors',doctorRoutes)
app.use('/api/user',userRoutes)

// Not Found Middleware
app.use('*',(req,res)=>{
    res.status(404).json({message : 'Page Not Found'})
})

// Error Middleware
app.use((err,req,res,next)=>{
    if(err){
        res.json({message:'something weng worng',err})
    }
})



const port = process.env.PORT | 8000
try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port,()=>{
        console.log(`Running server on : ${port}`);
    })
} catch (error) {
    
}