import { planetFacts } from "./data";
function Header({ setPlanetName }) {
  return (
    <section className="header">
      <div className="headerTitle">
        <h2>the planets</h2>
      </div>

      <div className="headerInfo ">
        {planetFacts.map((planet, index) => {
          return (
            <button
              className="headerBtn"
              key={index}
              onClick={() => setPlanetName(planet.name)}
            >
              {planet.name}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default Header;
