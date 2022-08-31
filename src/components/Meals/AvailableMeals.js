import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useState, useEffect } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMeals() {
      setIsLoading(true);

      const response = await fetch(
        "https://react-http-dc8b8-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Failed to Fetch");
      }

      const mealData = await response.json();

      let mealArray = [];

      for (const key in mealData) {
        mealArray.push({ id: key, ...mealData[key] });
      }
      setMeals(mealArray);
      setIsLoading(false);
    }

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>{error}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      price={meal.price}
      name={meal.name}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
