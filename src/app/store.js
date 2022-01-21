import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/user/userSlice";
import { authApi } from "./services/auth";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    counter: counterReducer,
    user: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
