import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/Slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await dispatch(login(user));
    navigate("/");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-[#F3F4F6]">
      <form
        onSubmit={handleLogin}
        className="w-full md:w-[400px] md:shadow-lg p-10 md:p-2 rounded-lg bg-slate-300"
      >
        <div className="mt-5 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold mb-3 text-white">
            Sign In
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="mx-auto max-w-xs flex justify-center items-center flex-col gap-4">
              <input
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-600 border border-gray-400 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-gray-300 "
                type="email"
                placeholder="Email"
              />
              <input
                name="password"
                value={user.password}
                onChange={handleInputChange}
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-600 border border-gray-400 placeholder-gray-400 text-white text-sm focus:outline-none focus:border-gray-300 "
                type="password"
                placeholder="Password"
              />
              <div className="w-full flex justify-end mt-1">
                <div className="text-sm">
                  Don't have an account?
                  <Link to="/register">
                    <span className="text-cyan-400 cursor-pointer"> Sign up</span>
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="mt-2 h-11 tracking-wide font-semibold bg-black hover:bg-cyan-400 text-gray-100 w-full py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
              >
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
