import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRoleHomePath } from "../shared/Layout/Menus/userMenu";

export default function PublicRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (localStorage.getItem("token")) {
    return <Navigate to={getRoleHomePath(user?.role)} replace />;
  }

  return children;
}
