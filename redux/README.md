# redux-practise

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Unchanged redux variables

Consider the `COUNTER_INITIAL_STATE` const below:

```
const COUNTER_INITIAL_STATE: CounterState = {
  counter: 0,
  showCounter: true,
};

if (action.type === REDUCER_ACTION_TYPE.INCREMENT) {
  return {
    counter: state.counter + 1,
    showCounter: state.showCounter,
  };
}
```

The `counter` and `showCounter` variables are both declared here, therefore in each reducer action case, the `counter` and `showCounter` both need to be assigned values, whether they have changed or not.

Whenever you do not want to assign new data to a variable, you can just return the `state.<prop>`.
