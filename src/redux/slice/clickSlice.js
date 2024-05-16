import { createSlice } from '@reduxjs/toolkit';

export const clickSlice = createSlice({
  name: 'click',
  initialState: {
    value: 0, // state
  },
  reducers: {
    // methods
    addClick: (state) => {
      state.value += 1;
    },
    resetClicks: (state) => {
      state.value = 0;
    },
  },
});

export const { addClick, resetClicks } = clickSlice.actions;
export default clickSlice.reducer;
