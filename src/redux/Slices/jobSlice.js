import { createSlice } from '@reduxjs/toolkit';
import { jobListings } from '../../utils/JobsApi';


const initialState = {
  jobs: jobListings,
  selectedJob:null,
  application:null
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    getJobs: (state, action) => {
        
        const  keyword = action.payload;
         console.log(keyword);
        if (keyword!=='' && keyword!==undefined) {
          state.jobs = state.jobs.filter(
            (job) =>
              job.programmingLanguage.toLowerCase().includes(keyword.toLowerCase())
          );
        } 
      },
      getJobsById:(state,action)=>{
        const  jobId = action.payload;
        
      state.selectedJob = state.jobs.find((job) => job.id == jobId) || null
      },
      submitApplication:(state,action)=>{
       
        const { name, email, coverletter, resume } = action.payload;
        console.log(name,resume,email ,coverletter);
        // Create a new application object with the relevant fields
        const newApplication = {
          name,
          email,
          coverletter,
          resume, // Store the file name of the resume
        };
        state.application=newApplication
      }
    
  },
});

export const { getJobs ,getJobsById,submitApplication} = jobSlice.actions;
export default jobSlice.reducer;