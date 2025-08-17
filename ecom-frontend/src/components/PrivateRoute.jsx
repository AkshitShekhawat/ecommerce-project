import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const PrivateRoute = ({ publicPage = false, adminOnly = false }) => {
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user && user?.roles?.includes("ROLE_ADMIN");
  const isSeller = user && user?.roles?.includes("ROLE_SELLER");
  const location = useLocation();

  // Public pages (login, register) → if logged in, redirect to home
  if (publicPage) {
    return user ? <Navigate to="/" /> : <Outlet />;
  }

  // Admin-only pages → only Admin & Seller allowed
  if (adminOnly) {
    if (!isAdmin && !isSeller) {
      return <Navigate to="/" replace />;
    }

    // Optional: If seller should access only specific admin pages
    if (isSeller && !isAdmin) {
      const sellerAllowedPaths = ["/admin/orders", "/admin/products"];
      const sellerAllowed = sellerAllowedPaths.some(path =>
        location.pathname.startsWith(path)
      );
      if (!sellerAllowed) {
        return <Navigate to="/" replace />;
      }
    }
  }

  // Normal private pages (like checkout) → any authenticated user can access
  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
