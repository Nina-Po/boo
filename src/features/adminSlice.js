import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginAdminThunk } from "./admin-thunk";
import toast from "react-hot-toast";
import {
  addAdminToLocalStorage,
  removeAdminFromLocalStorage,
  getAdminFromLocalStorage,
} from "../utils/localStorage";

const initialState = {
  isLoading: false,
  admin: getAdminFromLocalStorage(),
};
export const loginAdmin = createAsyncThunk(
  "user/loginAdmin",
  async (user, thunkAPI) => {
    return loginAdminThunk(`/admin/login/`, user, thunkAPI);
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    logOutAdmin: (state) => {
      state.admin = null;
      removeAdminFromLocalStorage();
      toast.success(`Пока !`);
    },
  },
  extraReducers: (builder) => {
    // loginAdmin
    builder.addCase(loginAdmin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAdmin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      const admin = payload.admin;
      state.admin = admin;
      console.log(payload);
      addAdminToLocalStorage(admin);
      toast.success(`Привет Админ !`);
    });
    builder.addCase(loginAdmin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });
  },
});

export const { logOutAdmin } = adminSlice.actions;
export default adminSlice.reducer;
