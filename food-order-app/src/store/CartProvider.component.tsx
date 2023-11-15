import { ReactNode, useReducer } from "react";

import { CartContext } from "./cart-context";
import { CartItemType } from "@/types/CartItem.type";
import { Cart } from "@/types/Cart.type";
import { REDUCER_ACTION_TYPE } from "@/enums/ReducerActionType.enum";
import { initialState, cartReducer } from "@/reducers/Cart.reducer";

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const handleAddItemToCart = (item: CartItemType) => {
    dispatchCartAction({
      type: REDUCER_ACTION_TYPE.ADD_ITEM_TO_CART,
      payload: item,
    });
  };

  const handleRemoveItemFromCart = (id: string) => {
    dispatchCartAction({
      type: REDUCER_ACTION_TYPE.REMOVE_ITEM_FROM_CART,
      payload: id,
    });
  };

  const cartContext: Cart = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: handleAddItemToCart,
    removeItem: handleRemoveItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};
