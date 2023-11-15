import { useContext } from "react";

import { Meal } from "@/types/Meal.type";
import { MealItemForm } from "@/components/Meals/MealItemForm/MealItemForm.component";
import { CartContext } from "@/store/cart-context";

import styles from "./MealItem.module.scss";

interface MealItemProps {
  meal: Meal;
}

export const MealItem: React.FC<MealItemProps> = ({ meal }) => {
  const context = useContext(CartContext);

  const handleAddToCart = (amount: number) => {
    context.addItem({
      id: meal.id,
      name: meal.name,
      amount,
      price: meal.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>£{meal.price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm id={meal.id} onAddToCart={handleAddToCart} />
      </div>
    </li>
  );
};
