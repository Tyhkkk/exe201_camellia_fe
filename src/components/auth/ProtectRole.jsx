import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth/AuthContext";

const ProtectedRoute = ({ requiredRole }) => {
  const { isAuthenticated, user } = useAuth();

  // If not authenticated, redirect to the sign-in page
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  // If the user's role doesn't match the required role, redirect to home page
  if (user?.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }

  // If authenticated and role matches, render the nested routes
  return <Outlet />;
};

export default ProtectedRoute;
