import { createSlice } from "@reduxjs/toolkit";

export const activeNavSlice = createSlice({
  name: "activeNav",
  initialState: {
    active: null,
  },
  reducers: {
    chooseMenu: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { chooseMenu } = activeNavSlice.actions;

export const selectActiveNavItem = (state) => state.activeNav.active;

export default activeNavSlice.reducer;
