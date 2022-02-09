import { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";
import { Meal } from "../models/meal";

function ViewMeals() {

  const [meals, setMeals]  = useState<Meal[]>([]);

  useEffect(() =>  {
    const getMeals = async () => {
      const data = await fetch("http://localhost:7000/api/menu/items");
      const dataJ = await data.json();
      setMeals(dataJ)
    }
    getMeals();
  }, []);

  console.log(meals);

  return (
    <div>
      {/* <Link className="App-link" to="/">Home</Link> */}
      <div>
        <h1>
          View Meals
        </h1>
        <div>
          <ul className="meal-list">
            {meals.map((meal) => {
              return (
                <li className="meal-list__item">
                  <p>{meal.name}</p>
                  <div><img src={`${meal.image}`}/></div>
                  <p>£{meal.price / 100}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ViewMeals;