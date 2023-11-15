import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import { counterSlice } from "./reducers/CounterSlice.reducer";
import { authSlice } from "./reducers/AuthSlice.reducer";

const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    authReducer: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type TypedDispatch = typeof store.dispatch;
export const useTypedDispatch: () => TypedDispatch = useDispatch;

export default store;
