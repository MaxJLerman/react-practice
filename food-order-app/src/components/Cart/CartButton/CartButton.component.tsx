import Image from "next/image";
import { clsx } from "clsx";
import { useContext, useEffect, useState } from "react";

import { CartContext } from "@/store/cart-context";
import { CartItemType } from "@/types/CartItem.type";

import styles from "./CartButton.module.scss";

interface CartButtonProps {
  onClick: () => void;
}

export const CartButton: React.FC<CartButtonProps> = ({ onClick }) => {
  const context = useContext(CartContext);
  const [isButtonHighlighted, setIsButtonHighlighted] =
    useState<boolean>(false);

  useEffect(() => {
    if (context.items.length === 0) return;
    setIsButtonHighlighted(true);

    const timer = setTimeout(() => {
      setIsButtonHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [context.items]);

  const numberOfCartItems = context.items.reduce(
    (currentNumber, item: CartItemType) => {
      return currentNumber + item.amount;
    },
    0,
  );

  const buttonStyle = clsx(styles.button, {
    [styles.bump]: isButtonHighlighted === true,
  });

  return (
    <button className={buttonStyle} onClick={onClick}>
      <span className={styles.icon}>
        <Image
          src="/assets/icons/CartIcon.svg"
          alt="cartIcon"
          width={27}
          height={27}
        />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

//TODO: refactor button element to wrap this component
