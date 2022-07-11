import {createSlice} from "@reduxjs/toolkit";

const initialCounterState = {
  count: 0,
}
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    updateNumber(state, action){
      state.count = action.payload;
    } 
  }
})
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;