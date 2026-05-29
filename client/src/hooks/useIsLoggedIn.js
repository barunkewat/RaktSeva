import { useSelector } from "react-redux";

export function useIsLoggedIn() {
  const { token, user } = useSelector((state) => state.auth);
  return Boolean(token || user || localStorage.getItem("token"));
}
