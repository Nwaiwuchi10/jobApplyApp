
import dotenv from "dotenv";
import JobApplication from "../models/JobApply"
import PostJobs from "../models/PostJobs";

dotenv.config();

export const ApplyNewJob = async (jobId: string, applicant: string) => {
    const jobExists = await JobApplication.findOne({ jobId, applicant });
    if (jobExists) throw new Error("You have already applied for the Job");
  
    const newJob = await JobApplication.create({ jobId, applicant });
    return newJob;
  };
  
  export const getPostedJobById = async (id: string) => {
    return await PostJobs.findById(id);
  };
export const getAllJobs = async () => {
const jobs = await JobApplication.find().sort({createdAt:-1}).populate({
    path:'jobId',
   
}).populate({
    path:'applicant',
    select: '-password',
   
})
    return jobs;
  };
  export const getAllAppliedJobId = async (jobId:string) => {
    const jobs = await JobApplication.find({jobId}).sort({createdAt:-1}).populate({
        path:'jobId',
       
    }).populate({
        path:'applicant',
        select: '-password',
       
    })
        return jobs;
      };
      
  export const getJobById = async (id:string) => {
    return await JobApplication.findById(id).populate({
        path:'jobId',
       
    }).populate({ 
        path:'applicant',
        select: '-password',
       
    })
  };
