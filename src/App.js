import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import "./App.css";
import ashData from "./ash.json";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Gear from "./components/Gear";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";

function resetData() {
  localStorage.setItem("data", JSON.stringify(ashData));
}

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => ++value); // update the state to force render
}

function App() {
  const data = JSON.parse(localStorage.getItem("data"));
  if (!data) {
    resetData();
  }
  const { hp, max_hp, gear } = data;

  const forceUpdate = useForceUpdate();

  return (
    <Container className="App">
      <main>
        <Portrait hp={hp} max_hp={max_hp} />
        <Character />
        {/* <Defense /> */}
        <Offense />
        <Gear gear={gear} forceUpdate={forceUpdate} />
        {/* <Skills style={{ gridRow: 1 }} /> */}
      </main>
    </Container>
  );
}

export default App;
