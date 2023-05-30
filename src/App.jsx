import "./App.css";
import Header from "./Header";
import Planet from "./Planet";
import { useState } from "react";

function App() {
  const [planetName, setPlanetName] = useState("Earth");

  return (
    <>
      <Header setPlanetName={setPlanetName} />
      <section className="mainBodyContainer">
        <Planet planetName={planetName} />
      </section>
    </>
  );
}

export default App;
