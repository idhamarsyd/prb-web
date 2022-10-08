import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    // userInfo: {
    //   username: "admin",
    //   password: "admin",
    // },
    username: "admin",
    password: "admin",
    isAuth: false,
    error: false,
    token: localStorage.getItem("token"),
  },
  reducers: {
    userLogout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.isAuth = false;
    },
    checkAuth: (state, action) => {
      if (state.username === action.payload) {
        localStorage.setItem("token", state.username);
        state.isAuth = true;
      }
    },
  },
  extraReducers: {},
});

export const { userLogout, checkAuth } = loginSlice.actions;

export default loginSlice.reducer;
