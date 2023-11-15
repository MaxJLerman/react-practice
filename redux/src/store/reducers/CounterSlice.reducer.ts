import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CounterState } from "@/types/CounterState.type";

const COUNTER_INITIAL_STATE: CounterState = {
  counter: 0,
  showCounter: true,
};

export const counterSlice = createSlice({
  name: "CounterSlice",
  initialState: COUNTER_INITIAL_STATE,
  reducers: {
    incrementCounter(state) {
      state.counter++;
    },
    decrementCounter(state) {
      state.counter -= 1;
    },
    increaseCounter(state, action: PayloadAction<number>) {
      state.counter += action.payload;
    },
    toggleVisibility(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  increaseCounter,
  toggleVisibility,
} = counterSlice.actions;

export default counterSlice.reducer;
