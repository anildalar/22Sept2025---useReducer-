// src/store/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "Rakesh" }, // default value
  reducers: {
    changeName: (oldstate, action) => {
        console.log(action);
      oldstate.name = action.payload;
    },
  },
});

export const { changeName } = userSlice.actions;
export default userSlice.reducer;
