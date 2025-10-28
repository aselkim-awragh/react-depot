import { use, useContext } from "react";
import { useNavigate } from "react-router";
import AuthContext from "../Context/AuthContext";
import { Navigate } from "react-router";
import { Outlet } from "react-router";
function ProtectedRouter({ children }) {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRouter;
