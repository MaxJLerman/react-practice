import { Item } from "./Item.type";

export type Meal = Item & {
  description: string;
};
