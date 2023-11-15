import Image from "next/image";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        className={styles.image}
        src="/assets/investment-calculator-logo.png"
        alt="logo"
        width={500}
        height={500}
      />
      <span className={styles.header}>Investment Calculator</span>
    </header>
  );
};
