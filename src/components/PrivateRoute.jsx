import { Navigate } from "react-router-dom";

// A wrapper for protected routes
function PrivateRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  
  // If no user is found in localStorage, redirect to login
  if (!user) {
    return <Navigate to="/LoginPage" replace />;
  }

  return children;
}

export default PrivateRoute;
