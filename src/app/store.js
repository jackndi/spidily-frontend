import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from "../features/auth/tokenSlice";
import { tokenAPI } from "../services/auth/tokenAPI";

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    [tokenAPI.reducerPath]: tokenAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenAPI.middleware),
});
