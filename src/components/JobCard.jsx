/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-6 mb-4">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold">{job.title}</h2>
          <p className="text-gray-600 mt-2">{job.company}</p>
          <p className="text-gray-700 mt-4">{job.description}</p>
          <div className="mt-4">
            <span className="py-1 px-2 rounded-full bg-black text-white text-sm mr-2">
              {job.programmingLanguage}
            </span>

          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-between mt-4 lg:mt-0 lg:pl-4">
          <div className="flex justify-between items-center">
            <p className="text-blue-500">{job.location}</p>
            <p className="text-gray-600">{job.datePosted}</p>
          </div>
          <Link to={`/job/${job.id}`} className="mt-4 lg:mt-0">
            <button
              className="block w-full bg-black text-white rounded-md py-2 px-4 text-center font-semibold"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
