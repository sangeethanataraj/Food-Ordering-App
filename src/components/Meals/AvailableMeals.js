import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "Spiced Elegance",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Fish Fry",
    description: "Crispy Catch.",
    price: 16.59,
  },
  {
    id: "m3",
    name: "Parupu Sadam",
    description: "Comfort Fare",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "Crispy Delight...",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Butter Chicken",
    description: "Indian Delight",
    price: 20.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
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