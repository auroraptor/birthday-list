import { createSlice } from "@reduxjs/toolkit";

const bdSlice = createSlice({
  name: "bdList",
  initialState: {
    //TODO: убрать моку
    bds: [
      {
        id: 1,
        date: "21.06",
      },
      {
        id: 2,
        date: "01.01",
      },
    ],
  },
  reducers: {
    addBd(state, action) {
      state.bds.push({
        id: action.payload.id,
        date: action.payload.date,
      });
    },
  },
});

export const { addBd } = bdSlice.actions;
export default bdSlice.reducer;
