import { Request, Response } from "express";
import { createNewJob } from "../services/PostJob";



export const postJob = async (req: Request, res: Response) => {
  try {
    
   
    const {companyName,  title, 
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
        imageUrl} = req.body;

    const job = await createNewJob(companyName,  title, 
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
        imageUrl);
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};



