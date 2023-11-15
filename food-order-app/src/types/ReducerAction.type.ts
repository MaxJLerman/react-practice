import { REDUCER_ACTION_TYPE } from "@/enums/ReducerActionType.enum";
import { CartItemType } from "./CartItem.type";

export type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload: CartItemType | string;
};
