import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Success = () => {
  const { application } = useSelector((state) => state.jobs);
  return (
    <div className="bg- min-h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="green"
            className="w-16 h-16 mx-auto text-green-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="text-3xl font-semibold mb-2 text-green-600">
            Application Submitted Successfully
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            Thank you for applying to the job position. Your application has been submitted successfully.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-2xl font-semibold mb-2 text-gray-800">Submitted Form Data:</h3>
          <ul className="text-gray-600">
            <li>
              <strong>Name:</strong> {application.name}
            </li>
            <li>
              <strong>Email:</strong> {application.email}
            </li>
            <li>
              <strong>Cover Letter:</strong> {application.coverletter}
            </li>
            <li>
              <strong>Resume:</strong> <a className="text-blue-600">{application.resume}</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="block mt-6 text-blue-500 hover:text-blue-600 text-center text-sm">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
