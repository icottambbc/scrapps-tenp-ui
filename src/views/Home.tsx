import {
  Link
} from "react-router-dom";

function Home() {
  return (
  <div className="home-view">
    <h1>
      Welcome to Scrapps
    </h1>
    <div className="home-panel">
      <div>
        <Link className="home-panel__link" to="/create-meal">I am a Food Producer</Link>
      </div>
      <div>
        <Link className="home-panel__link" to="/view-meals">
          I am a Food Consumer
        </Link>
      </div>
    </div>
  </div>
  )
}

export default Home;