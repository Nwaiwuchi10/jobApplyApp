
import dotenv from "dotenv";
import PostJobs from "../models/PostJobs";

dotenv.config();

export const createNewJob = async (
    companyName:string,
  title: string, 
  description: string,
  requirements: string,
  role: string,
  openTo:string ,
  payPeriod:string,
  category:string,
  postedBy: string,
  jobType: string,
  JobState:string,
  country: string,
  state: string,
  city: string,
  fixedSalary: string, 
  minSalary:string,
  maxSalary:string,

  address:string,

  contactNumber: string,
  deadline:Date ,
  duration: string,
  imageUrl: string,
) => {
  const jobExists = await PostJobs.findOne({companyName, title, postedBy });
  if (jobExists) throw new Error("Job already exists");

  const newJob = await PostJobs.create({ companyName,  title, 
    description,
    requirements,
    role,
    openTo,
  payPeriod,
    category,
    postedBy,
    jobType,
    JobState,
    country,
    state,
    city,
    fixedSalary, 
    minSalary,
    maxSalary,
  
    address,
  
    contactNumber,
    deadline,
    duration,
    imageUrl });
  return newJob;
};

