"use client";

import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { Counter } from "@/components/Counter/Counter.component";
import { Header } from "@/components/Header/Header.component";
import { Auth } from "@/components/Auth/Auth.component";
import { UserProfile } from "@/components/UserProfile/UserProfile.component";

export default function Home() {
  const authSlice = useSelector((state: RootState) => state.authReducer);

  return (
    <>
      <Header />
      {authSlice.isAuth ? <UserProfile /> : <Auth />}
      <Counter />
    </>
  );
}
