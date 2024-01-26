import mongoose from 'mongoose'

export const connectDB = async (url)=>{
    try{
        await mongoose.connect(url)
            .then(()=>{console.log('Connected to db');})
    }catch(err){
        console.log(err);
    }
}