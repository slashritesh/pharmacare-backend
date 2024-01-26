import { User } from "../model/User.js"



export const getAllUsers =async(req,res)=>{
    const allUsers = await User.find({})
    res.json({msg:"All user in database",allUsers})   
};

