import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
  count: 0,
}
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    updateNumber(state, action){
      // + before a "text" will convert it to a number
      state.count += +action.payload;
    } 
  }
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;