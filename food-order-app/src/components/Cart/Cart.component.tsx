import { useContext } from "react";

import { CartItemType } from "@/types/CartItem.type";
import { Modal } from "@/elements/Modal/Modal.element";
import { CartContext } from "@/store/cart-context";
import { CartItem } from "@/components/Cart/CartItem/CartItem.component";

import styles from "./Cart.module.scss";

interface CartProps {
  isCartShown: boolean;
  onHideCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ isCartShown, onHideCart }) => {
  const context = useContext(CartContext);

  const handleAddItemToCart = (item: CartItemType) => {
    context.addItem({ ...item, amount: 1 });
  };

  const handleRemoveItemFromCart = (id: string) => {
    context.removeItem(id);
  };

  return (
    <Modal isShown={isCartShown} onClose={onHideCart}>
      <ul className={styles.cartItems}>
        {context.items.map((item: CartItemType) => (
          <CartItem
            key={item.id}
            cartItem={item}
            onAddCartItem={() => handleAddItemToCart(item)}
            onRemoveCartItem={() => handleRemoveItemFromCart(item.id)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>£{context.totalAmount.toFixed(2)}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.buttonAlt} onClick={onHideCart}>
          Close
        </button>
        {context.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};
