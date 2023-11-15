# food-order-app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Type safety

Consider the example below:

```
const updatedItems = state.items.concat(action.payload as CartItem);
```

The `concat()` method only accepts parameters that are of the same state as the array it is called on. Because the type of `action.payload` can be `string` or `CartItem`, `action.payload` must be type aliased to `CartItem` due to `state.items` being of type `CartItem[]`.

The same can be said for the next example:

```
const updatedTotalAmount = state.totalAmount + (action.payload as CartItem).price * (action.payload as CartItem).amount;
```

Again, because the `action.payload` can be either `string` or `CartItem`, it must be aliased to `CartItem` to access the `CartItem` specific props.
