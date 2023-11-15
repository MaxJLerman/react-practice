import { CartItemType } from "./CartItem.type";

export type CartState = {
  items: Array<CartItemType>;
  totalAmount: number;
};

type CartFunctions = {
  addItem: (item: CartItemType) => void;
  removeItem: (id: string) => void;
};

export type Cart = CartState & CartFunctions;
