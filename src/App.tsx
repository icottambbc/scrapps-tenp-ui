import './App.css';
import Home from './views/Home';
import ViewMeals from './views/ViewMeals';
import CreateMeal from './views/CreateMeal';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link className="App-link" to="/">Home</Link>
        <Routes>
          <Route path="/"  element={<Home />}></Route>
          <Route path="/create-meal" element={<CreateMeal />}></Route>
          <Route path="/view-meals"  element={<ViewMeals />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

