import Image from "next/image";

import { CartButton } from "@/components/Cart/CartButton/CartButton.component";

import styles from "./Header.module.scss";

interface HeaderProps {
  onShowCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShowCart }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Food Order App</h1>
        <CartButton onClick={onShowCart} />
      </header>
      <div className={styles.mainImage}>
        <Image
          src="/assets/images/meals.jpg"
          alt="meals"
          width={2000}
          height={2000}
        />
      </div>
    </>
  );
};
