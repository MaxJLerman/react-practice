import { useSelector } from "react-redux";

import { RootState, useTypedDispatch } from "@/store/store";
import {
  incrementCounter,
  decrementCounter,
  increaseCounter,
  toggleVisibility,
} from "@/store/reducers/CounterSlice.reducer";

import styles from "./Counter.module.scss";

export const Counter: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { counter, showCounter } = useSelector(
    (state: RootState) => state.counterReducer,
  );

  const handleIncrement = () => dispatch(incrementCounter());

  const handleDecrement = () => dispatch(decrementCounter());

  const handleIncrease = () => dispatch(increaseCounter(5));

  const handleToggleCounter = () => dispatch(toggleVisibility());

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={styles.value}>{counter}</div>}
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleIncrease}>Increment by 5</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
      <button onClick={handleToggleCounter}>Toggle Counter</button>
    </main>
  );
};
