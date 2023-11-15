import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const handleIsActive = ({
    isActive,
  }: {
    isActive: boolean;
  }): string | undefined => {
    return isActive ? styles.active : undefined;
  };

  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink to="/" className={handleIsActive} end={true}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={handleIsActive}>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
