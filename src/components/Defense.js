import React from "react";
import Stat from "./Stat";
import ArmorClass from "./ArmorClass";

const Defense = ({ character, inventory, modifiers }) => {
  return (
    <section className="defense">
      <h1>Defense</h1>
      <div style={{ display: "flex" }}>
        <ArmorClass
          character={character}
          inventory={inventory}
          modifiers={modifiers}
        />
        <Stat label="Touch AC" value="14" />
        <Stat label="Flat-Footed" value="10" />
      </div>
      <div style={{ display: "flex" }}>
        <Stat label="Fortitude" value={character.fortitude} />
        <Stat label="Reflex" value={character.reflex} />
        <Stat label="Will" value={character.will} />
      </div>
    </section>
  );
};

export default Defense;
