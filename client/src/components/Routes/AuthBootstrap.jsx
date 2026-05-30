import { useEffect } from "react";
import { useDispatch } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../services/authActions";

export default function AuthBootstrap() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    const loadUser = async () => {
      try {
        const { data } = await API.get("/auth/current-user");
        if (data?.success) {
          dispatch(getCurrentUser());
        }
      } catch {
        localStorage.clear();
      }
    };

    loadUser();
  }, [dispatch]);

  return null;
}
