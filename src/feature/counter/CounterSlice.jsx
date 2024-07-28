import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state, action) => {
      console.log('==> ', action);
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByPlayload: (state, action) => {
      console.log('==> ', action);
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByPlayload } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
