
import Login from './pages/Auth/Login'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


import JobDetails from './pages/JobDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/Slices/userSlice';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
  const dispatch = useDispatch()
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  useEffect(() => {

    dispatch(getUser())


  }, [dispatch])
  console.log(user, isAuthenticated);
  return (
    <div>

      <BrowserRouter>
        <><Navbar isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Home user={user} />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route
              path="/login"
              element={
                isAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <Login />
                )
              }
            />
            <Route
              path="/register"
              element={
                isAuthenticated ? (
                  <Navigate to="/" replace />
                ) : (
                  <Register />
                )
              }
            />
            <Route
              path="/user"
              element={
                isAuthenticated ? (
                  <Profile />
                ) : (
                  <Navigate to="/login" replace />
                )
              }
            />
            <Route path="/job/:id" element={<JobDetails />} />
          </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

export default App
