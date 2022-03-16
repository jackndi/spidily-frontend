import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      // Set the token on local storage
      localStorage.setItem("spidily-auth", JSON.stringify(action.payload));
    },
    removeToken: (state) => {
      state.token = null;
      // remove the token from local storage
      localStorage.removeItem("spidily-auth");
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
