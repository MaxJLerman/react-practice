import { FormEvent } from "react";

import { useTypedDispatch } from "@/store/store";
import { login } from "@/store/reducers/AuthSlice.reducer";

import styles from "./Auth.module.scss";

export const Auth = () => {
  const dispatch = useTypedDispatch();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(login());
  };

  return (
    <main className={styles.auth}>
      <section>
        <form onSubmit={handleSubmit}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};
