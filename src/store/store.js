import { configureStore } from "@reduxjs/toolkit";
import bdSlice from "../slices/bdSlice";

export default configureStore({
  reducer: {
    bdList: bdSlice,
  },
});
