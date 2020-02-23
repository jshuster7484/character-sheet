import Container from "@material-ui/core/Container";
import React, { useState } from "react";
import "./App.css";
import ashData from "./ash.json";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";

function resetData() {
  localStorage.setItem("data", JSON.stringify(ashData));
}

const DataContext = React.createContext();

export function useData() {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataProvider`);
  }
  return context;
}

function DataProvider(props) {
  const [hitPoints, setHitPoints] = React.useState(ashData.hitPoints);

  return (
    <DataContext.Provider
      value={{
        hitPoints: [hitPoints, setHitPoints],
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

function App() {
  return (
    <Container className="App">
      <main>
        <DataProvider>
          {/* <Portrait /> */}
          <Character />
          <Defense />
          <Offense />
          <Inventory />
          {/* <Skills style={{ gridRow: 1 }} /> */}
        </DataProvider>
      </main>
    </Container>
  );
}

export default App;
