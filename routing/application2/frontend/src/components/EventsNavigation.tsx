import { NavLink } from "react-router-dom";

import styles from "./EventsNavigation.module.css";

export const EventsNavigation = () => {
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
            <NavLink to="/events" className={handleIsActive} end={true}>
              All Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={handleIsActive}>
              New Event
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default EventsNavigation;
