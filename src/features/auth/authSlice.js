import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../app/services/auth";

const initialState = {
  token: null,
  refreshToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.refreshToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
    });
  },
});

// Export actions
export const { logout } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
