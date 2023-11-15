import { createSlice } from "@reduxjs/toolkit";

const AUTH_INITIAL_STATE = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "AuthSlice",
  initialState: AUTH_INITIAL_STATE,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
