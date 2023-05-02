import { createSlice } from "@reduxjs/toolkit";

const stableSlice = createSlice({
  name: "stable",
  initialState: { showStable: true },
  reducers: {
    setStableState: (state, action) => {
      state.showStable = action.payload;
    },
  },
});

export const { setStableState } = stableSlice.actions;
export default stableSlice.reducer;
