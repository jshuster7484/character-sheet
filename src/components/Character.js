import React from "react";
import Ability from "./Ability";

export default function Character() {
  return (
    <section className="character">
      <h1>Ability Scores</h1>
      <div style={{ display: "flex" }}>
        <Ability name="Strength" value={12} />
        <Ability name="Dexterity" value={20} />
        <Ability name="Constitution" value={10} />
        <Ability name="Intelligence" value={9} />
        <Ability name="Wisdom" value={20} />
        <Ability name="Charisma" value={13} />
      </div>
    </section>
  );
}
