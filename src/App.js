import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";

import "./App.css";
import ashData from "./ash.json";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";
import CharacterForm, { abilities } from "./components/CharacterForm";

const emptyCharacter = {
  name: "",
  race: "",
  characterClass: "",
  str: "",
  dex: "",
  con: "",
  int: "",
  wis: "",
  chr: "",
  hitPoints: "",
  fortitude: "",
  reflex: "",
  will: "",
  cmd: "",
  initiative: "",
  speed: "",
  cmb: "",
};

const loadLocalData = (key, emptyValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(emptyValue));
  return emptyValue;
};

function App() {
  const localCharacter = loadLocalData("character", emptyCharacter);
  const localInventory = loadLocalData("inventory", []);
  const localModifiers = loadLocalData("modifiers", []);

  const [character, setCharacter] = useState(localCharacter);
  const [inventory, setInventory] = useState(localInventory);
  const [modifiers, setModifiers] = useState(localModifiers);
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const setAllCharacters = newCharacter => {
    setCharacter(newCharacter);
    localStorage.setItem("character", JSON.stringify(newCharacter));
  };

  const setAllModifiers = newModifiers => {
    setModifiers(newModifiers);
    localStorage.setItem("modifiers", JSON.stringify(newModifiers));
  };

  const setAllInventories = newInventory => {
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
          <CharacterForm
            character={character}
            setCharacter={setAllCharacters}
            setEdit={setEdit}
          />
        ) : (
          <div>
            <Character
              character={character}
              inventory={inventory}
              modifiers={modifiers}
            />
            <Defense />
            <Offense />
            <Inventory
              inventory={inventory}
              setInventory={setAllInventories}
              modifiers={modifiers}
              setModifiers={setAllModifiers}
            />
          </div>
        )}
      </main>
    </Container>
  );
}

export default App;
