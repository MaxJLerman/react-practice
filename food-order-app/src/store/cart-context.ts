import { createContext } from "react";

import { CartItemType } from "@/types/CartItem.type";
import { Cart } from "@/types/Cart.type";

export const CartContext = createContext<Cart>({
  items: [] as CartItemType[],
  totalAmount: 0,
  addItem: (_item: CartItemType) => {},
  removeItem: (_id: string) => {},
});
