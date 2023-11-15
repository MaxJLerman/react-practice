"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import { Button } from "@/elements/Button/Button";
import { UserInput } from "@/elements/UserInput/UserInput";
import { Card } from "@/elements/Card/Card";
import { User } from "@/types/User.types";
import { ErrorModal } from "../ErrorModal/ErrorModal";
import { Error } from "@/types/Error.types";

import styles from "./Form.module.scss";

const initialState: User = {
  username: "",
  age: "",
};

interface FormProps {
  addUser: (user: User) => void;
}

export const Form: React.FC<FormProps> = ({ addUser }) => {
  const [user, setUser] = useState<User>(initialState);
  const [error, setError] = useState<Error | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => {
      return { ...prevUser, [name]: value };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user.username.trim().length === 0 || user.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age",
      });
      return;
    }

    if (+user.age < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age above 0",
      });
      return;
    }

    addUser(user);

    setUser(initialState);
  };

  const handleErrorReset = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          resetModal={handleErrorReset}
        />
      )}
      <Card className={styles.container}>
        <form onSubmit={handleSubmit}>
          <UserInput
            inputType="text"
            title="Username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
          <UserInput
            inputType="number"
            title="Age (Years)"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <Button text="Add User" type="submit" />
        </form>
      </Card>
    </div>
  );
};
