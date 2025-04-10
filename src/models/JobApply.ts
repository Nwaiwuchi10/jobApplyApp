import mongoose from "mongoose";

const JobApplicationSchema = new mongoose.Schema({
    jobId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PostJob',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },  
    status:{
        type:String,
        enum:['pending', 'accepted', 'viewed', 'rejected'],
        default:'pending'
    }
},{timestamps:true});
export default mongoose.model("JobApplication", JobApplicationSchema);
