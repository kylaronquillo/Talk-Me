import "../App.css";
import { Link } from "react-router-dom";
import homeImage from '../imgs/img-home.png';

const Welcome = () => {
  const handleClick = () => {
    console.log("Button Clicked!");
  };

  return (

    <div className="container">
      <img src={homeImage} alt="Home Image" />
      <div class="shadow p-3 bg-body-tertiary rounded d-flex flex-column justify-content-center align-items-center">
        <nav className="appname-container">
          <h1 className="appname">talkME</h1>
        </nav>
        <section className="quote-container">
          <p className="quote">
            A Speech-to-Text Notetaking Companion
          </p>
        </section>
        <div className="buttons">
          <Link to="/about">
            <button type="button" class="btn btn-dark">
              {"About"}
            </button>
          </Link>
          <Link to="/speak">
            <button type="button" class="btn btn-dark">
              {"Speak"}
            </button>
          </Link>
          <Link to="/notes">
            <button type="button" class="btn btn-dark">
              {"Notes"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
