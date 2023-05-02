import { configureStore } from "@reduxjs/toolkit";
import stableReducer from "../slice/stable.slice";
import listDisplayReducer from "../slice/list.slice";

const store = configureStore({
  reducer: {
    stable: stableReducer,
    listDisplay: listDisplayReducer,
  },
});

export default store;
