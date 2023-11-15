import { NavLink } from "react-router-dom";

import styles from "./MainNavigation.module.css";

export const MainNavigation = () => {
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
            <NavLink to="/events" className={handleIsActive}>
              Events
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
