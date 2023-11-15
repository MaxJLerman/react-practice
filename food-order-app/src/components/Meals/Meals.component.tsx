import { Card } from "@/elements/Card/Card.element";
import { MealItem } from "@/components/Meals/MealItem/MealItem.component";
import { DUMMY_MEALS } from "@/data/dummy-meals.data";
import { Meal } from "@/types/Meal.type";

import styles from "./Meals.module.scss";

interface MealsProps {}

export const Meals: React.FC<MealsProps> = ({}) => {
  return (
    <>
      <section className={styles.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
      <section className={styles.meals}>
        <Card>
          <ul>
            {DUMMY_MEALS.map((meal: Meal) => (
              <MealItem key={meal.id} meal={meal} />
            ))}
          </ul>
        </Card>
      </section>
    </>
  );
};
