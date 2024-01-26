import { Doctor } from "../model/Doctor.js"


export const getAlldoctors =async (req,res)=>{
    const alldoctors = await Doctor.find({})
    res.json({msg:'all Doctors in Database',alldoctors})
}