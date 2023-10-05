import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getJobsById, submitApplication } from "../redux/Slices/jobSlice"
import Success from "../components/Success"

const JobDetails = () => {
  const {id}=useParams()
  const dispatch=useDispatch()
  const [success,setSuccess]=useState(false)
  const {selectedJob}=useSelector((state)=>state.jobs)
  const [application,setApplication]=useState({
    name:'',
    email:'',
    coverletter:'',
    resume:''
  })
  useEffect(()=>{
    dispatch(getJobsById(id))
  },[dispatch,id])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleResumeChange=(e)=>{
    const {name}=e.target.files[0]
    console.log(name);
      setApplication((prevFormData) => ({
        ...prevFormData,
        resume: name,
    }));// Up


  
            
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // const formData = new FormData();
    // formData.append('name', application.name);
    // formData.append('email', application.email);
    // formData.append('coverletter', application.coverletter);
    // formData.append('resume', application.resume)
    await dispatch(submitApplication(application))
    setSuccess(true)
    console.log(application);

  }
  return success?(<Success/>):(
      <div className="bg-gray-100 min-h-screen flex justify-center items-center h-full">

    {/* Header */}
    

    {/* Job Details */}
    <div className="container mx-auto mt-8 p-4 bg-white rounded-lg shadow-md ">
    
      <div className="container mx-auto mb-5">
        <h1 className="text-3xl font-semibold">{selectedJob?.title}</h1>
        <p className="text-lg">{selectedJob?.company}</p>
      </div>
    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Job Description */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
          <p>
            {selectedJob?.description}
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-4">Qualifications</h2>
          <ul>
           
            <li>{selectedJob?.qualification}</li>
            {/* Add more qualifications */}
          </ul>
        </div>

        {/* Application Form */}
        <div className="bg-gray-50 p-6 py-10 rounded-md h-max">
          <h2 className="text-2xl font-semibold mb-4">Apply for this Position</h2>
          <form className="" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Full Name
              </label>
              <input
               onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input
               onChange={handleInputChange}
                className="w-full p-2 border rounded-md"
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coverletter">
                Cover Letter
              </label>
              <textarea  onChange={handleInputChange} name="coverletter" id="coverletter" cols="30" className="w-full" rows="10"/>
            </div>
            <div className="mb-4" >
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
                Upload Resume
              </label>
              <input className="w-full p-2" type="file" id="resume" name="resume" onChange={handleResumeChange} />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              type="submit"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobDetails