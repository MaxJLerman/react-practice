"use client";

import { useState } from "react";

import { Header } from "@/components/Header/Header.component";
import { Meals } from "@/components/Meals/Meals.component";
import { Cart } from "@/components/Cart/Cart.component";
import { CartProvider } from "@/store/CartProvider.component";

export default function Home() {
  const [isCartShown, setIsCartShown] = useState<boolean>(false);

  const handleShowCart = () => setIsCartShown(true);
  const handleHideCart = () => setIsCartShown(false);

  return (
    <CartProvider>
      <Header onShowCart={handleShowCart} />
      <Cart isCartShown={isCartShown} onHideCart={handleHideCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
