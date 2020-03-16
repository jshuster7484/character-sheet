import React from "react";
import Ability from "./Ability";

export default function Character(props) {
  const {
    characterClass,
    name,
    race,
    strength,
    dexterity,
    constitution,
    intelligence,
    wisdom,
    charisma,
  } = props;
  return (
    <section className="character">
      <span>
        {name}, {race} {characterClass}
      </span>
      <h1>Ability Scores</h1>
      <div style={{ display: "flex" }}>
        <Ability name="Strength" value={strength} />
        <Ability
          name="Dexterity"
          value={dexterity}
          modifiers={[{ name: "Bracers of Dexterity", value: 2 }]}
        />
        <Ability name="Constitution" value={constitution} />
        <Ability name="Intelligence" value={intelligence} />
        <Ability name="Wisdom" value={wisdom} />
        <Ability name="Charisma" value={charisma} />
      </div>
    </section>
  );
}
