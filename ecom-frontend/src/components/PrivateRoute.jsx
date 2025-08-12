import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");

  if (publicPage) {
    return user ? <Navigate to="/" /> : <Outlet />; // if user is loggedIn and try to access login page then it will be redirected to its profile page
  }

  if (adminOnly) {
        if (!isAdmin) {
            return <Navigate to="/" replace />
        }
    }

  return user ? <Outlet /> : <Navigate to="/login" />;  // this is the logic for private pages it redirected the unauthenticated user to login page
}

export default PrivateRoute;
