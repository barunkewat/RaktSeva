import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../../pages/HomePage";
import DonateBlood from "../../pages/DonateBlood";

export default function BloodRoute() {
  if (localStorage.getItem("token")) {
    return (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    );
  }

  return <DonateBlood />;
}
