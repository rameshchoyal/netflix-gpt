import { configureStore } from "@reduxjs/toolkit";
import reducers from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: reducers,
  },
});
export default appStore;
