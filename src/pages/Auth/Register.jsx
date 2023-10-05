import { useState } from 'react';
import { useDispatch } from 'react-redux';



import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../redux/Slices/userSlice';

const Register = () => {
  const dispatch = useDispatch()
  const navigation = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault()

    await dispatch(register(formData))

    navigation('/login')
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6]">
      <form encType='multipart/form-data' onSubmit={handleSubmit} className=" w-full md:w-[400px] md:h-[500px] md:shadow-lg py-5 md:py-10 p-10 md:p-2 rounded-lg bg-slate-300 ">
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold mb-3">
            Sign up
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs flex justify-center items-center flex-col gap-4">
              <input
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="text" placeholder="Name" name="name" />
              <input
                value={formData.email}
                name="email"
                onChange={handleInputChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                type="email" placeholder="Email" />
              <input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white "
                type="password" placeholder="Password" />

              <button
                type='submit'
                className="mt-2 tracking-wide font-semibold bg-black text-gray-100 w-full py-4 rounded-lg hover:bg-cyan-300 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none h-12">
                <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">
                  Sign Up
                </span>
              </button>

              <div className="mx-auto mt-1 text-sm">
                {" "}
                Have an account?
                <Link to='/login'> <span className="text-cyan-400 cursor-pointer"> Sign In</span></Link>
              </div>

            </div>



          </div>
        </div>
      </form>
    </div>
  )
}

export default Register