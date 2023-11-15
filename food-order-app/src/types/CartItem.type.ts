import { Item } from "./Item.type";

export type CartItemType = Item & {
  amount: number;
};
