import React from "react";
import Stat from "./Stat";

export default function Defense() {
  return (
    <section className="defense">
      <h1>Defense</h1>
      <div style={{ display: "flex" }}>
        <Stat
          label="Armor Class"
          value="18"
          tooltip="10 Base +6 Dexterity +2 Armor"
        />
        <Stat label="Touch AC" value="14" />
        <Stat label="Flat-Footed" value="10" />
      </div>
      <div style={{ display: "flex" }}>
        <Stat label="Fortitude" value="4" />
        <Stat label="Reflex" value="4" />
        <Stat label="Will" value="4" />
      </div>
    </section>
  );
}
