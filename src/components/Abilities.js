import React, { useState } from "react";
import Ability from "./Ability";

const Abilities = (props) => {
  const { edit, modifiers, setAbilityMods } = props;
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  return (
    <section>
      <h1>Ability Scores</h1>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Ability
          edit={edit}
          name="Strength"
          base={strength}
          modifiers={modifiers.filter((mod) => mod.target === "strength")}
          setAbilityScore={setStrength}
        />
        <Ability
          edit={edit}
          name="Dexterity"
          base={dexterity}
          modifiers={modifiers.filter((mod) => mod.target === "dexterity")}
          setAbilityScore={setDexterity}
        />
        <Ability
          edit={edit}
          name="Constitution"
          base={constitution}
          modifiers={modifiers.filter((mod) => mod.target === "constitution")}
          setAbilityScore={setConstitution}
        />
        <Ability
          edit={edit}
          name="Intelligence"
          base={intelligence}
          modifiers={modifiers.filter((mod) => mod.target === "intelligence")}
          setAbilityScore={setIntelligence}
        />
        <Ability
          edit={edit}
          name="Wisdom"
          base={wisdom}
          modifiers={modifiers.filter((mod) => mod.target === "wisdom")}
          setAbilityScore={setWisdom}
        />
        <Ability
          edit={edit}
          name="Charisma"
          base={charisma}
          modifiers={modifiers.filter((mod) => mod.target === "charisma")}
          setAbilityScore={setCharisma}
        />
      </div>
    </section>
  );
};

export default Abilities;
