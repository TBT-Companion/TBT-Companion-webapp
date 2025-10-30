import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

// Wraps around protected routes and checks authentication
function ProtectedRoute({ children }) {
  const [isAllowed, setIsAllowed] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const ok = await checkAuth(navigate);
      setIsAllowed(ok);
    })();
  }, []);

  if (isAllowed === null) {
    // Still checking auth — you can return a loader here if you like
    return <div>Loading...</div>;
  }

  // If not allowed, redirect handled inside checkAuth (to /error)
  return isAllowed ? children : <Navigate to="/error" replace />;
}

export default ProtectedRoute;
