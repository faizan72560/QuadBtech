
import { Navigate, Outlet } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ isAuthenticated, children, redirect = '/login' }) => {


  if (!isAuthenticated) {
    return <Navigate to={redirect} />
  }



  return children ? children : <Outlet />
}

export default ProtectedRoute