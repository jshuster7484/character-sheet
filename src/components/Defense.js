import React from "react";
import Stat from "./Stat";

export default function Defense() {
  return (
    <section className="defense">
      <h1>Defense</h1>
      <div style={{ display: "flex" }}>
        {/* <Stat
          label={data.armorClass.name}
          value={data.armorClass.value}
          modifiers={data.armorClass.modifiers}
        /> */}
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
