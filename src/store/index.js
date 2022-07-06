import { configureStore } from "react-redux";

import authReducer from "./auth";

//initialize the global redux state
const store = configureStore({
  reducer:{
    auth: authReducer
  }
})
export default store;