import { createSlice } from "@reduxjs/toolkit";

const listDisplaySlice = createSlice({
  name: "listDisplay",
  initialState: { showList: false },
  reducers: {
    setListDisplay: (state, action) => {
      state.showList = action.payload;
    },
  },
});

export const { setListDisplay } = listDisplaySlice.actions;
export default listDisplaySlice.reducer;
