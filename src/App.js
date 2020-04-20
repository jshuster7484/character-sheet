import React, { useState } from "react";
import { Button, Container } from "@material-ui/core";

import "./App.css";
import Abilities from "./components/Abilities";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import Skills from "./components/Skills";
import { skillsArray } from "./data/skills";

const emptyCharacter = {
  name: "",
  race: "",
  characterClass: "",
  level: 1,
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  hitPoints: "",
  fortitude: 0,
  reflex: 0,
  will: 0,
  cmd: "",
  initiative: 0,
  speed: 30,
  cmb: 0,
};

const emptyAbilityMods = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
};

const emptyAbilities = {
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
};

const loadLocalData = (key, emptyValue) => {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(key, JSON.stringify(emptyValue));
  return emptyValue;
};

const App = () => {
  const localCharacter = loadLocalData("character", emptyCharacter);
  const localInventory = loadLocalData("inventory", []);
  const localModifiers = loadLocalData("modifiers", []);
  const localAbilityMods = loadLocalData("abilityMods", emptyAbilityMods);
  const localSkills = loadLocalData("skills", skillsArray);

  const [character, setCharacter] = useState(localCharacter);
  const [inventory, setInventory] = useState(localInventory);
  const [modifiers, setModifiers] = useState(localModifiers);
  const [abilityMods, setAbilityMods] = useState(localAbilityMods);
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  const setAllCharacters = (newCharacter) => {
    setCharacter(newCharacter);
    localStorage.setItem("character", JSON.stringify(newCharacter));
  };

  const setAllModifiers = (newModifiers) => {
    setModifiers(newModifiers);
    localStorage.setItem("modifiers", JSON.stringify(newModifiers));
  };

  const setAllInventories = (newInventory) => {
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
            {edit ? "Save" : "Edit Character"}
          </Button>
        </header>
        <div>
          <Character character={character} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Abilities
                edit={edit}
                modifiers={modifiers}
                setAbilityMods={setAbilityMods}
              />
              <Defense
                character={character}
                inventory={inventory}
                modifiers={modifiers}
              />
              <Offense character={character} />
              <Inventory
                inventory={inventory}
                setInventory={setAllInventories}
                modifiers={modifiers}
                setModifiers={setAllModifiers}
              />
            </div>
            <Skills
              abilityMods={abilityMods}
              edit={edit}
              initialSkills={localSkills}
            />
          </div>
        </div>
      </main>
    </Container>
  );
};

export default App;
