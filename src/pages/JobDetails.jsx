import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getJobsById, submitApplication } from "../redux/Slices/jobSlice";
import Success from "../components/Success";

const JobDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const { selectedJob } = useSelector((state) => state.jobs);
  const [application, setApplication] = useState({
    name: "",
    email: "",
    coverletter: "",
    resume: "",
  });
  const [jobApplication, setJobApplication] = useState([])

  useEffect(() => {
    dispatch(getJobsById(id));
  }, [dispatch, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleResumeChange = (e) => {
    const { name } = e.target.files[0];
    setApplication((prevFormData) => ({
      ...prevFormData,
      resume: name,
    }));
  };

  const handleSubmit = async (e) => {
    let arr = []
    e.preventDefault();
    await dispatch(submitApplication(application));
    if (localStorage.getItem('jobApplication')) {
      let jobApplication = JSON.parse(localStorage.getItem("jobApplication"))
      arr = [selectedJob, ...jobApplication]
      localStorage.setItem("jobApplication", JSON.stringify(arr))

    }
    else {
      arr = [selectedJob]
      localStorage.setItem("jobApplication", JSON.stringify(arr))
    }
    setSuccess(true);
  };

  return success ? (
    <Success />
  ) : (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold">{selectedJob?.title}</h1>
          <p className="text-lg">{selectedJob?.company}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
            <p>{selectedJob?.description}</p>
            <h2 className="text-2xl font-semibold mt-6 mb-4">Qualifications</h2>
            <ul>
              <li>{selectedJob?.qualification}</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 py-10 rounded-md max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Apply for this Position
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="coverletter" className="block text-gray-700 text-sm font-bold mb-2">
                  Cover Letter
                </label>
                <textarea
                  name="coverletter"
                  id="coverletter"
                  cols="30"
                  rows="6"
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <label htmlFor="resume" className="block text-gray-700 text-sm font-bold mb-2">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleResumeChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
