import { configureStore } from "@reduxjs/toolkit";
import reducers from "./userSlice";
import movieReducers from "./movieSlice";
import gptReducers from "./gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: reducers,
    movie: movieReducers,
    gpt: gptReducers,
    config: configReducer,
  },
});
export default appStore;
