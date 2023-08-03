import { useState } from "react";
import { planetFacts } from "./data";
import styles from "./planetSize.module.css";
import logo from "../public/assets/icon-source.svg";

function processData(planetFacts, planetName) {
  const planet = planetFacts.find((el) => el.name === planetName);
  return planet;
}

function Planet({ planetName }) {
  const [value, setValue] = useState("overview");
  const [overview, setOverview] = useState(false);
  const [structure, setStructure] = useState(false);
  const [geology, setGeology] = useState(false);

  const planet = processData(planetFacts, planetName);

  function changeColor() {
    if (planetName === "Mercury") {
      return "#419EBB";
    }
    if (planetName === "Venus") {
      return "#EDA249";
    }
    if (planetName === "Earth") {
      return "#6D2ED5";
    }
    if (planetName === "Mars") {
      return "#D14C32";
    }
    if (planetName === "Jupiter") {
      return "#D83A34";
    }
    if (planetName === "Saturn") {
      return "#CD5120";
    }
    if (planetName === "Uranus") {
      return "#1EC1A2";
    }
    if (planetName === "Neptune") {
      return "#2D68F0";
    }
  }

  return (
    <main>
      <section className="planetSection">
        <div className="planetLogo">
          {value === "geology" ? (
            <>
              <img
                className={styles[planetName]}
                src={planet.images.overview}
              />

              <img
                className={styles.geology}
                src={planet.images.geology}
                alt="logo"
              />
            </>
          ) : (
            <img
              className={`${styles[planetName]} ${styles.relative}`}
              src={planet.images[value]}
              alt="logo"
            />
          )}
        </div>
        <div className="planetInfo">
          <div className="planetInfoDescription">
            <h1>{planet.name}</h1>

            <p>{planet[value].content}</p>
            <span>
              Source :
              <a href={planet[value].source}>
                Wikipedia <img src={logo} alt="" />
              </a>
            </span>
          </div>

          <div className="planetInfoButtonsContainer">
            <button
              style={
                overview
                  ? {
                      backgroundColor: changeColor(),
                      borderColor: changeColor(),
                    }
                  : {}
              }
              className="btn"
              onClick={(e) => {
                setValue(e.target.value);
                setStructure(false);
                setGeology(false);

                setOverview(true);
              }}
              value="overview"
            >
              01 overView
            </button>
            <button
              style={
                structure
                  ? {
                      backgroundColor: changeColor(),
                      borderColor: changeColor(),
                    }
                  : {}
              }
              className="btn"
              onClick={(e) => {
                setValue(e.target.value);
                setOverview(false);
                setGeology(false);
                setStructure(true);
              }}
              value="structure"
            >
              02 Internal Structure
            </button>
            <button
              style={
                geology
                  ? {
                      backgroundColor: changeColor(),
                      borderColor: changeColor(),
                    }
                  : {}
              }
              className="btn"
              onClick={(e) => {
                setOverview(false);
                setStructure(false);
                setGeology(true);
                setValue(e.target.value);
              }}
              value="geology"
            >
              03 Surface Geology
            </button>
          </div>
        </div>
      </section>
      <section className="planetFooter">
        <div className="info">
          <p>rotation time</p>
          <h3>{planet.rotation} </h3>
        </div>
        <div className="info">
          <p>REVOLUTION TIME</p>
          <h3>{planet.revolution}</h3>
        </div>
        <div className="info">
          <p>radius</p>
          <h3>{planet.radius}</h3>
        </div>
        <div className="info">
          <p>AVERAGE TEMP.</p>
          <h3>{planet.temperature}</h3>
        </div>
      </section>
    </main>
  );
}

export default Planet;
