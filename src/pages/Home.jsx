import { useEffect, useState } from "react";
import JobCard from "../components/JobCard";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "../redux/Slices/jobSlice";



const Home = () => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState("");
  useEffect(() => {
    dispatch(getJobs(''))
  }, [dispatch])
  const { jobs } = useSelector((state) => state.jobs)

  const handleSearch = async () => {
    await dispatch(getJobs(keyword))
    setkeyword('')
  }
  return (
    <div className="h-full w-full flex flex-col bg-[#F3F4F6]">

      <div className="py-20">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-4xl font-semibold mb-4 text-black">Start Your Job Search</h1>
          <div className="flex flex-col md:flex-row gap-4 md:w-[60%] mx-auto">
            <input
              type="text"
              className="w-full p-2 border border-black rounded-md text-black"
              placeholder="E.g., JavaScript, Python, etc..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 ease-in-out w-44"
              onClick={handleSearch}
            >
              Search Jobs
            </button>

          </div>
        </div>
      </div>


      <div>
        <div className="bg-gray-100 p-4">
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold mb-4">Job Listings</h1>
            <div className="h-full flex flex-col gap-4">

              {jobs && jobs?.map((job, index) => (
                <JobCard key={index} job={job} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home