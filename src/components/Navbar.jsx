/* eslint-disable react/prop-types */
import { useState } from "react";

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Slices/userSlice";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isAuthenticated, user }) => {

  const navigate = useNavigate()

  const avatarUrl = `https://ui-avatars.com/api/?name=${user?.name}&background=random&rounded=true`;
  const dispatch = useDispatch()
  const [openProfileModal, setProfileModal] = useState(false);

  const handleLogout = async () => {
    await dispatch(logout())
    localStorage.removeItem("jobApplication")
    setProfileModal(!openProfileModal);
  };



  const handleProfile = () => {
    navigate("/user")
  }

  return (
    <nav className="bg-black sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className=" flex-1 items-center justify-center sm:items-stretch sm:justify-start sm:flex hidden">
            <Link to="/">
              <div>
                <h2 className="text-xl text-white">Job Search</h2>
              </div>

            </Link>

          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              {isAuthenticated ? (
                <div>
                  <button
                    onClick={() => setProfileModal(!openProfileModal)}
                    type="button"
                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    {user && (
                      <img
                        className="h-8 w-8 rounded-full"
                        src={avatarUrl}
                        alt=""
                      />
                    )}
                  </button>
                </div>
              ) : (
                <Link to="/login">
                  <button className="relative flex  text-white rounded-full p-3 text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    Login
                  </button>
                </Link>
              )}

              {openProfileModal && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                    onClick={handleProfile}
                  >
                    Your Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Log out
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
