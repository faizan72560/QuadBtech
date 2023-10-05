
import Login from './pages/Auth/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';


import JobDetails from './pages/JobDetails';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/Slices/userSlice';
import ProtectedRoute from './components/ProtectedRoute';
function App() {
const dispatch=useDispatch()
const {user,isAuthenticated}=useSelector((state)=>state.auth)
useEffect(()=>{
  
  dispatch(getUser())


},[dispatch])
console.log(user);
  return (
    <div>

    <BrowserRouter>
   <><Navbar isAuthenticated={isAuthenticated} user={user}/>
    <Routes>
      <Route path='/' element={<ProtectedRoute isAuthenticated={isAuthenticated}> <Home user={user}/></ProtectedRoute>}/>
      <Route path='/login' element={<ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/'> <Login/></ProtectedRoute>}/>
      <Route path='/register' element={ <ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/'><Register/></ProtectedRoute>}/>
     
      <Route path='/job/:id' element={<ProtectedRoute isAuthenticated={isAuthenticated}><JobDetails/></ProtectedRoute>}/>
    </Routes>
   
  </>
    </BrowserRouter>
    </div>
  )
}

export default App
