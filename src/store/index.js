import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import dateReducer from "./date";

//initialize the global redux state
const store = configureStore({
  reducer:{
    auth: authReducer,
    date: dateReducer
  }
})
export default store;