import React from "react";
import Ability from "./Ability";

export default function Character() {
  return (
    <section className="character">
      <h1>Ash</h1>
      <div style={{ display: "flex" }}>
        <Ability name="Strength" score={14} />
        <Ability name="Dexterity" score={18} />
        <Ability name="Constitution" score={10} />
        <Ability name="Intelligence" score={9} />
        <Ability name="Wisdom" score={20} />
        <Ability name="Charisma" score={13} />
      </div>
    </section>
  );
}
