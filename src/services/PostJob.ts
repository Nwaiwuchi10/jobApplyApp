
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
  jobState:string,
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
    jobState,
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
export const getAllJobs = async () => {
    const jobs = await PostJobs.find().sort({createdAt:-1}).populate({
        path:'postedBy',
       
    }).populate({
        path:'applications',
        populate: {
          path: 'applicant',
          model: 'User',
        },
    })
    return jobs;
  };
  export const getAllPostedByUserJobs = async (postedBy:string) => {
    const jobs = await PostJobs.find({postedBy}).sort({createdAt:-1}).populate({
        path:'postedBy',
       
    }).populate({
        path:'applications',
        populate: {
          path: 'applicant',
          model: 'User',
        },
    })
    return jobs;
  };
  export const getJobById = async (id:string) => {
    return await PostJobs.findById(id).populate({
        path:'postedBy',
        select: '-password',
       
    }).populate({
      path:'applications',
      populate: {
        path: 'applicant',
        model: 'User',
      },
  })
  };
