import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema(
    {
        user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        age : {
            type : Number
        },
        phone : {
            type : Number
        },
        address : {
            type : String
        },
        bloodGroup : {
            type : String
        },
        Appointments : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Appointment'
            }
        ]
    }
)

export const Patient = mongoose.model('Patient',PatientSchema)
