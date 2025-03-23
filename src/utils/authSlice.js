import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    addToken: (state, action) => {
      state.authToken = action.payload.token;
    },
    removeToken: () => initialState,
  },
});

export const { addToken, removeToken } = authSlice.actions;

export default authSlice.reducer;