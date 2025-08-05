import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ publicPage = false }) => {
  const { user } = useSelector((state) => state.auth);

  if (publicPage) {
    return user ? <Navigate to="/profile" /> : <Outlet />; // if user is loggedIn and try to access login page then it will be redirected to its profile page
  }

  return user ? <Outlet /> : <Navigate to="/login" />;  // this is the logic for private pages it redirected the unauthenticated user to login page
}

export default PrivateRoute;
