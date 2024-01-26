import mongoose from 'mongoose'

const DoctorSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        isAccount_Setup : {
            type : Boolean,
            default : false
        },
        description : {
            type : String
        },
        experience : {
            type : String
        },
        qualification : {
            type : String
        },
        hospitals_workIn : [{
            name : String,
            address : String
        }],
        Clinics : [{
            name : String,
            address : String
        }],
        Appointments : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Appointment'
            }
        ]
    }
)

export const Doctor = mongoose.model('Doctor',DoctorSchema)