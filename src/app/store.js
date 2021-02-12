import { configureStore } from "@reduxjs/toolkit";
import activeNavReducer from "../features/activeNavSlice";

export default configureStore({
  reducer: {
    activeNav: activeNavReducer,
  },
});
