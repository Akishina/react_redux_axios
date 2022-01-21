import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../app/services/auth";
import { logout } from "../auth/authSlice";

const initialState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(logout.type, (state) => {
        state.currentUser = null;
      })
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.currentUser = action.payload.user;
      });
  },
});

// Select state currentUser from slice
export const selectUser = (state) => state.user.currentUser;

// Export reducer
export default userSlice.reducer;
