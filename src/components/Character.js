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
    inventory,
  } = props;

  const strengthValue =
    parseInt(strength) +
    inventory
      .filter(item => item.modTarget === "Strength")
      .reduce(function(prev, item) {
        return prev + parseInt(item.modValue);
      }, 0);

  const strengthMods = inventory.filter(item => item.modTarget === "Strength");

  return (
    <section className="character">
      <span>
        {name}, {race} {characterClass}
      </span>
      <h1>Ability Scores</h1>
      <div style={{ display: "flex" }}>
        <Ability name="Strength" base={strength} modifiers={strengthMods} />
        <Ability name="Dexterity" base={dexterity} />
        <Ability name="Constitution" base={constitution} />
        <Ability name="Intelligence" base={intelligence} />
        <Ability name="Wisdom" base={wisdom} />
        <Ability name="Charisma" base={charisma} />
      </div>
    </section>
  );
}
