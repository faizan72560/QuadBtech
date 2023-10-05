import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Success = () => {
    const {application}=useSelector((state)=>state.jobs)
  return (
    <div>
         <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-56 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4 flex  items-center"><svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="green"
  width="50"
  height="50"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M5 13l4 4L19 7"
  />
</svg>
Application Submitted Successfully</h2>
        <p className="text-lg mb-4">
          Thank you for applying to the job position. Your application has been submitted successfully.
        </p>
        <h3 className="text-2xl font-semibold mb-2">Submitted Form Data:</h3>
        <ul>
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
            <strong>Resume:</strong> <a>{application.resume}</a>
          </li>
        </ul>
        <Link to="/" className="text-blue-500 hover:text-blue-600 text-sm mt-4 block">
          Go Back to Home
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Success