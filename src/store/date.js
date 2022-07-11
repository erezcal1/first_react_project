import { createSlice } from "@reduxjs/toolkit";

const initialDateState = {
  date: new Date(),
}

const dateSlice = createSlice({
  name: "date",
  initialState: initialDateState,
  reducers: {
    setDate(state) {
      state.date = new Date();
    }
  }
})
export const dateActions = dateSlice.actions;

export default dateSlice.reducer;