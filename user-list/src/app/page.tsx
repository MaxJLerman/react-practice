"use client";

import { useState } from "react";

import { Form } from "@/components/Form/Form";
import { UsersList } from "@/components/UsersList/UsersList";
import { User } from "@/types/User.types";

export default function Home() {
  const [usersList, setUsersList] = useState<Array<User>>([]);

  const handleAddUser = (user: User) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, user];
    });
  };

  return (
    <>
      <Form addUser={handleAddUser} />
      <UsersList users={usersList} />
    </>
  );
}
