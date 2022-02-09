import { useState } from "react";
import {
  Link
} from "react-router-dom";
import { Meal } from "../models/meal";

function CreateMeal() {

  const [meal, setMeal]  = useState<Meal>({
    name: "Spring Salad",
    price: 599,
    description: "Fresh",
    image: "https://cdn.auth0.com/blog/whatabyte/salad-sm.png"
  });

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(meal);
    const response = await fetch("http://localhost:7000/api/menu/items", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(meal)
    })
    console.log(await response.json());
  }


  return (
    <div>
      <Link className="App-link" to="/">Home</Link>
      <div>
        <h1>
          Create a Meal
        </h1>
        <div>
          <form onSubmit={(e) => {
              submitForm(e)}
            } className="form">
            <div className="form-field">
              <div>
                <label className="form-field__label" htmlFor="name">
                  Name<span className="form-field__label--required"> *</span>
                </label>
              </div>
              <input className="form-field__input" id="name" name="name" value={meal.name} />
            </div>
            <div className="form-field">
              <div>
                <label className="form-field__label" htmlFor="price">Price (in pence)<span className="form-field__label--required"> *</span></label>
              </div>
              <input className="form-field__input" id="price" name="price" value={meal.price} />
            </div>
            <div className="form-field">
              <div>
                <label className="form-field__label" htmlFor="description">Description<span className="form-field__label--required"> *</span></label>
              </div>
              <input className="form-field__input" id="description" name="description" value={meal.description} />
            </div>
            <div className="form-field">
              <div>
                <label className="form-field__label" htmlFor="image">Image URL<span className="form-field__label--required"> *</span></label>
              </div>
              <input className="form-field__input" id="image" name="image" value={meal.image} />
            </div>
            <button>Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateMeal;