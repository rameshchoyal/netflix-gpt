import { configureStore } from "@reduxjs/toolkit";
import reducers from "./userSlice";
import movieReducers from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: reducers,
    movie: movieReducers,
  },
});
export default appStore;
