import Link from "next/link";
import { useSelector } from "react-redux";

import { RootState, useTypedDispatch } from "@/store/store";
import { logout } from "@/store/reducers/AuthSlice.reducer";

import styles from "./Header.module.scss";

export const Header = () => {
  const dispatch = useTypedDispatch();
  const { isAuth } = useSelector((state: RootState) => state.authReducer);

  const handleClick = () => dispatch(logout());

  return (
    <header className={styles.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <Link href="/">My Products</Link>
            </li>
            <li>
              <Link href="/">My Sales</Link>
            </li>
            <li>
              <button onClick={handleClick}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};
