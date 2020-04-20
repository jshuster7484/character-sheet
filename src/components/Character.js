import React from "react";
import Ability from "./Ability";
import * as abilities from "../data/abilities";

export default function Character(props) {
  const { character } = props;
  const { name, race, characterClass } = character;

  return (
    <section className="character">
      <span>
        {name}, {race} {characterClass}
      </span>
    </section>
  );
}
