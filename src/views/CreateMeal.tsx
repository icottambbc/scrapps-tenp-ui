import {
  Link
} from "react-router-dom";

function CreateMeal() {
  return (
  <div>
    <Link className="App-link" to="/">Home</Link>
    <div>
      <h1>
        Create a Meal
      </h1>
      <div className="home-panel">
      </div>
    </div>
  </div>
  )
}

export default CreateMeal;