import React from "react";
import Ability from "./Ability";
import { abilities } from "./CharacterForm";

export default function Character(props) {
  const { character, inventory } = props;
  const { name, race, characterClass } = character;

  // const strengthValue =
  //   parseInt(strength) +
  //   inventory
  //     .filter(item => item.modTarget === "Strength")
  //     .reduce(function(prev, item) {
  //       return prev + parseInt(item.modValue);
  //     }, 0);

  return (
    <section className="character">
      <span>
        {name}, {race} {characterClass}
      </span>
      <h1>Ability Scores</h1>
      <div style={{ display: "flex" }}>
        {abilities.map(ability => (
          <Ability
            name={ability.label}
            base={parseInt(character[ability.name])}
            modifiers={inventory.filter(
              item => item.modTarget === ability.name,
            )}
          />
        ))}
      </div>
    </section>
  );
}
