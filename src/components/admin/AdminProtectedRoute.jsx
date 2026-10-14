
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminProtectedRoute() {
  const reduxUser = useSelector((state) => state.registr.login);

  let storedAdmin = null;

  try {
    storedAdmin = JSON.parse(localStorage.getItem("admin") || "null");
  } catch {
    storedAdmin = null;
  }

  const user = reduxUser?.role === "admin" ? reduxUser : storedAdmin;
  const token = localStorage.getItem("token");

  if (!token || user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AdminProtectedRoute;
