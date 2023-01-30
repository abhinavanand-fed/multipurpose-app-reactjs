import { useEffect, } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Games from "./components/Games";
import OTT from "./components/OTT";
import Weather from "./components/Weather";
import Dics from "./components/Dics";
import Train from "./components/Train";
import Meme from "./components/Meme";
import YoutubeAPI from "./components/Youtube";


function App({ match }) {
  useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Games" element={<Games />} />
          <Route path="/OTT" element={<OTT />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Dics" element={<Dics />} />
          <Route path="/Train" element={<Train />} />
          <Route path="/Meme" element={<Meme />} />
          <Route path="YoutubeAPI" element= {<YoutubeAPI />}/>
          <Route path="*" element={<Navbar />} />
          
        </Routes>
      </Router>
    </div>
  );
}
export default App;

const Navbar = () => {
  const location = useLocation();
  


  if (location.pathname !== "/Games" && location.pathname !== "/OTT") {
    return (
      <>
        <div className="heading-container">
          <h1>Choose any</h1>

          <div className="button-container">
            <button className="weat-button button-hover small-btn">
              <Link to="/Weather" className="link-text">
                Weather
              </Link>
            </button>

            <button className="games-button button-hover">
              <Link to="/Games" className="link-text">
                Free Games
              </Link>
            </button>

            {/*
            <button className="ott-button button-hover">
              <Link to="/OTT" className="link-text">
                OTT Platforms(Region- India)
              </Link>
            </button>
            */}

            <button className="ott-button button-hover">
              <Link to="/Dics" className="link-text">
                Dictionary
              </Link>
            </button>

            {/*
            <button className="train-button button-hover">
              <Link to="/Train" className="link-text">
                PNR Status
              </Link>
            </button>
            */}

            <button className="train-button button-hover">
              <Link to="/Meme" className="link-text">
                Meme
              </Link>
            </button>

            <button className="train-button button-hover">
              <Link to="/YoutubeAPI" className="link-text">
                YouTube
              </Link>
            </button>

          </div>
        </div>
      </>
    );
  }
  return null;
};
