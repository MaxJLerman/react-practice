import { MouseEventHandler } from "react";

import { CartItemType } from "@/types/CartItem.type";

import styles from "./CartItem.module.scss";

interface CartItemProps {
  cartItem: CartItemType;
  onRemoveCartItem: MouseEventHandler<HTMLButtonElement>;
  onAddCartItem: MouseEventHandler<HTMLButtonElement>;
}

export const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onAddCartItem,
  onRemoveCartItem,
}) => {
  return (
    <li className={styles.cartItem}>
      <div>
        <h2>{cartItem.name}</h2>
        <div className={styles.summary}>
          <span className={styles.price}>£{cartItem.price.toFixed(2)}</span>
          <span className={styles.amount}>x {cartItem.amount}</span>
        </div>
      </div>
      <div className={styles.actions}>
        <button onClick={onRemoveCartItem}>{"-"}</button>
        <button onClick={onAddCartItem}>{"+"}</button>
      </div>
    </li>
  );
};
