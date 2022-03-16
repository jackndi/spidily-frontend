import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken: (state, action) => {
      console.log("state ", state);
      console.log("action ", action);
      state.token = action.payload;
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
});

export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
