import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        email : {
            type : String,
            required : true,
            unique:true
        },
        password : {
            type : String,
            required : true
        },
        avatar :{
            type:String
        },
        role : {
            type : String,
            enums : ['Patient','doctor','user'],
            default: 'user'
        },
        
    }
)



export const User = mongoose.model('User',UserSchema)
 