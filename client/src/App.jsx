import { ReactLenis } from "lenis/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Help from "./pages/Help";
import Contact from "./pages/Contact";
import BloodRoute from "./components/Routes/BloodRoute";
import AuthBootstrap from "./components/Routes/AuthBootstrap";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/Routes/ProtectedRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import AdminHome from "./pages/Admin/AdminHome";
import Donor from "./pages/Dashboard/Donor";
import Hospitals from "./pages/Dashboard/Hospitals";
import Organisation from "./pages/Dashboard/Organisation";
import Consumer from "./pages/Dashboard/Consumer";
import Donation from "./pages/Dashboard/Donation";
import Analytics from "./pages/Dashboard/Analytics";
import DonorList from "./pages/Admin/DonorList";
import HospitalList from "./pages/Admin/HospitalList";
import OrganisationList from "./pages/Admin/OrganisationList";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Provider store={store}>
      <ReactLenis
        root
        options={{
          lerp: 0.05, // higher = faster response
          wheelMultiplier: 2.5, // control scroll speed
          touchMultiplier: 1, // better mobile feel
          smoothWheel: true,
          smoothTouch: true,
        }}
      >
        <BrowserRouter>
          <AuthBootstrap />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            draggable
            theme="colored"
          />
          <Routes>
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blood" element={<BloodRoute />} />
            <Route
              path="/inventory"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminHome />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor"
              element={
                <ProtectedRoute>
                  <Donor />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hospital"
              element={
                <ProtectedRoute>
                  <Hospitals />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organisation"
              element={
                <ProtectedRoute>
                  <Organisation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/consumer"
              element={
                <ProtectedRoute>
                  <Consumer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donation"
              element={
                <ProtectedRoute>
                  <Donation />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor-list"
              element={
                <ProtectedRoute>
                  <DonorList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/hospital-list"
              element={
                <ProtectedRoute>
                  <HospitalList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/organisation-list"
              element={
                <ProtectedRoute>
                  <OrganisationList />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </Provider>
  );
}
