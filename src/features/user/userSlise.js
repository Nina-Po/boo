import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk } from "./thunk";
import toast from "react-hot-toast";
import {
  addTokenToLocalStorage,
  addUserToLocalStorage,
  getTokenFromLocalStorage,
  getUserFromLocalStorage,
  removeTokenFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
  isSidebarOpen: false,
  isRegisterModal: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    return registerUserThunk("/auth/signup", user, thunkAPI);
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log(user);
    return loginUserThunk(`/auth/login/`, user, thunkAPI);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = null;
      state.token = "";
      removeUserFromLocalStorage();
      removeTokenFromLocalStorage();
    },
    sidebarCloseHandler: (state) => {
      state.isSidebarOpen = false;
    },
    sidebarOpenHandler: (state) => {
      state.isSidebarOpen = true;
    },
    registerHandler: (state, { payload }) => {
      state.isRegisterModal = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    });

    // registers
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      toast.success(`Привет ${user.name} !`);
    });
    builder.addCase(registerUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    });

    // login
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      const { user, token } = payload;
      state.isLoading = false;
      state.user = user;
      state.token = token;
      addUserToLocalStorage(user);
      addTokenToLocalStorage(token);
      state.isRegisterModal = false;
      toast.success(`Добро пожаловать  ${user.name} !`);
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload, { theme: "colored" });
    });
  },
});

export const {
  logOutUser,
  sidebarCloseHandler,
  sidebarOpenHandler,
  registerHandler,
  pageIdHandler,
} = userSlice.actions;
export default userSlice.reducer;
