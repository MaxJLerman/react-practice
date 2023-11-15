import { REDUCER_ACTION_TYPE } from "@/enums/ReducerActionType.enum";
import { CartState } from "@/types/Cart.type";
import { CartItemType } from "@/types/CartItem.type";
import { ReducerAction } from "@/types/ReducerAction.type";

export const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

export const cartReducer = (
  state: CartState,
  action: ReducerAction,
): CartState => {
  let existingCartItemIndex: number;
  let existingCartItem: CartItemType;
  let updatedItems: CartItemType[];
  let updatedTotalAmount: number;

  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD_ITEM_TO_CART:
      const itemToAdd = action.payload as CartItemType;

      updatedTotalAmount =
        state.totalAmount + itemToAdd.price * itemToAdd.amount;
      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === itemToAdd.id,
      );
      existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem: CartItemType = {
          ...existingCartItem,
          amount: existingCartItem.amount + itemToAdd.amount,
        };

        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(itemToAdd);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    case REDUCER_ACTION_TYPE.REMOVE_ITEM_FROM_CART:
      const idOfItemToRemove = action.payload as string;

      existingCartItemIndex = state.items.findIndex(
        (item) => item.id === idOfItemToRemove,
      );
      existingCartItem = state.items[existingCartItemIndex];

      updatedTotalAmount = state.totalAmount - existingCartItem.price;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== idOfItemToRemove,
        );
      } else {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

    default:
      return initialState;
  }
};
