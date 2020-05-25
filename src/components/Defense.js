import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Stat from "./Stat";

const Defense = () => {
  const context = useContext(AppContext);
  const { state } = context;
  const { armorClass, fortitude, reflex, will } = state;

  return (
    <section className="defense">
      <h1>Defense</h1>
      <div style={{ display: "flex" }}>
        <Stat label="Armor Class" value={armorClass} />
        <Stat label="Touch AC" value="14" />
        <Stat label="Flat-Footed" value="10" />
      </div>
      <div style={{ display: "flex" }}>
        <Stat label="Fortitude" value={fortitude} />
        <Stat label="Reflex" value={reflex} />
        <Stat label="Will" value={will} />
      </div>
    </section>
  );
};

export default Defense;
