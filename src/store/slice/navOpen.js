import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "navOpen",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = counterSlice.actions;

export default counterSlice.reducer;
