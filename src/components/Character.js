import React, { useContext } from "react";
import AppContext from "../context/AppContext";

export default function Character() {
  const context = useContext(AppContext);
  const { state } = context;
  const { name, race, characterClass } = state;

  return (
    <section className="character">
      <span>
        {name}, {race} {characterClass}
      </span>
    </section>
  );
}
