import { createSlice } from "@reduxjs/toolkit";

//create vars that we want redux to store for us
const initialAuthState ={
  loggedIn: false,
  email:"",
}

// this is a redux toolkit pattern to create the store for redux itself
// redux toolkit also create reducers/actions to manipulate the state
const authSlice = createSlice({
  //for redux use
  name: "auth", 
  //initial state
  initialState: initialAuthState, 
  //functions inside the reducers are called actions
  //functions to manipulate the state
  reducers: {
    //we will call this function when we user logged in
    //to update the login state
    login(state){
      state.loggedIn = true;
    },
    // logout to update the state
    logout(state){
      state.loggedIn = false;
    }
  }
})
//export the actions so we can use them from other 
//components/pages to update the state
export const authActions = authSlice.actions;

//export the configured state actions to the index.js of redux
//so redux can configure the state
export default authSlice.reducer;