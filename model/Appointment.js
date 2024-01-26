import mongoose from 'mongoose'

const TimeSlotSchema = new mongoose.Schema({
    appointmentId : {type:mongoose.Schema.Types.ObjectId,ref:'Appointment'},
    startTime : { type: Date , required : true},
    endTime : { type: Date , required : true},
    scheduled_date : {
        type : Date
    },
    scheduled_day :{
        type : String,
        enum : ["Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday","Sunday"]
    },
})

export const Timeslot = mongoose.model('Timeslot',TimeSlotSchema)

const AppointmentSchema = new mongoose.Schema(
    {
        patientId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Patient'
        },
        doctorId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Doctor'
        },
        status : {
            type : String,
            enum : ["Pending","Cancelled","Completed"],
            default : "Pending"
        },
        prescription : {
            type : String
        },
        timeslot : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Timeslot'
        }
    },
    {timestamps:true}
)

export const Appointment = mongoose.model('Appointment',AppointmentSchema)
