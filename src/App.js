import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";

import "./App.css";
import ashData from "./ash.json";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";
import NewCharacterForm from "./components/NewCharacterForm";
import { setNestedObjectValues } from "formik";

const newCharacter = {
  name: "",
  race: "",
  characterClass: "",
  strength: "",
  dexterity: "",
  constitution: "",
  wisdom: "",
  intelligence: "",
  charisma: "",
  hitPoints: "",
  fortitude: "",
  reflex: "",
  will: "",
  cmd: "",
  initiative: "",
  speed: "",
  cmb: "",
};

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
  const localInventory = JSON.parse(localStorage.getItem("inventory"));

  const [inventory, setInventory] = useState(localInventory);
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const character = localStorage.getItem("character")
    ? JSON.parse(localStorage.getItem("character"))
    : newCharacter;

  const setInventories = newInventory => {
    setInventory(newInventory);
    localStorage.setItem("inventory", JSON.stringify(newInventory));
  };

  return (
    <Container className="App">
      <main>
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h1>Character Sheet</h1>
          <Button onClick={handleEditToggle} style={{ height: "auto" }}>
            {edit ? "Cancel" : "Edit Character"}
          </Button>
        </header>
        {edit ? (
          <NewCharacterForm character={character} setEdit={setEdit} />
        ) : (
          <DataProvider>
            {/* <Portrait /> */}
            <Character
              name={character.name}
              characterClass={character.characterClass}
              race={character.race}
              strength={character.strength}
              dexterity={character.dexterity}
              constitution={character.constitution}
              intelligence={character.intelligence}
              wisdom={character.wisdom}
              charisma={character.charisma}
              inventory={inventory}
            />
            <Defense />
            <Offense />
            <Inventory inventory={inventory} setInventory={setInventories} />
            {/* <Skills style={{ gridRow: 1 }} /> */}
          </DataProvider>
        )}
      </main>
    </Container>
  );
}

export default App;
