import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../services/API";
import { toast } from "react-toastify";
import { getRoleHomePath } from "../components/shared/Layout/Menus/userMenu";

// === Login ===
export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      // === Store Token === //
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        const homePath = getRoleHomePath(data.user?.role);
        setTimeout(() => {
          window.location.replace(homePath);
        }, 2000);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// === Register ===
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      role,
      name,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone,
    },
    { rejectWithValue },
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
        role,
        name,
        email,
        password,
        organisationName,
        hospitalName,
        website,
        address,
        phone,
      });
      if (data.success) {
        toast.success(data.message);
        setTimeout(() => {
          window.location.replace("/login");
        }, 2000);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// === Current User ===
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await API.get("/auth/current-user");
      if (res?.data) {
        return res?.data;
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

// === Update Profile ===
export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (profileData, { rejectWithValue }) => {
    try {
      const { data } = await API.put("/auth/update-profile", profileData);
      if (data?.success) {
        toast.success(data.message);
        return data;
      }
      return rejectWithValue(data?.message ?? "Update failed");
    } catch (error) {
      const message =
        error.response?.data?.message ?? error.message ?? "Update failed";
      toast.error(message);
      return rejectWithValue(message);
    }
  },
);
