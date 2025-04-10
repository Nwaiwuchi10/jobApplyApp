import mongoose from "mongoose";

export enum JobCategory {
  SOFTWARE_DEVELOPMENT = 'Software_Development',
  ENGINEERING = 'Engineering',
  DESIGN = 'Design',
  MARKETING = 'Marketing',
  SALES = 'Sales',
  OTHER = 'Other',
}

export enum JobType {
  FULL_TIME = 'Full-Time',
  PART_TIME = 'Part-Time',
  CONTRACT = 'Contract',
  INTERN = 'Internship',
  FREELANCE = 'Freelance',
}

export enum JobState {
  REMOTE = 'Remote',
  ONSITE = 'On-Site',
  HYBRID = 'Hybrid',
}

export enum PayPeriod {
  HOURLY = 'Hourly',
  DAILY = 'Daily',
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
  YEARLY = 'Yearly',
}

const PostJobSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: String },
    role: { type: String, required: true },
    openTo: { type: String },

    category: {
      type: String,
      enum: Object.values(JobCategory),
      required: true,
    },

    jobType: {
      type: String,
      enum: Object.values(JobType),
      required: true,
    },

    jobState: {
      type: String,
      enum: Object.values(JobState),
      required: true,
    },

    payPeriod: {
      type: String,
      enum: Object.values(PayPeriod),
    },

    country: { type: String },
    state: { type: String },
    city: { type: String },
    fixedSalary: { type: String }, 
    minSalary:{type:String},
    maxSalary:{type:String},

    address: { type: String },

    contactNumber: { type: String },
    deadline: { type: Date },
    duration: { type: String },
    imageUrl: { type: String },
postedBy:{type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User"},
    startedAt: { type: Date, default: Date.now },
    endedAt: { type: Date },
    applications: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'JobApplication',
        }
    ]
  },


  { timestamps: true }
);

export default mongoose.model("PostJob", PostJobSchema);
