import React from "react";
import Stat from "./Stat";

const Weapon = (props) => {
  const { attackBonus, criticalRange, damageDie, name } = props;

  return (
    <div
      style={{
        alignItems: "center",
        border: "1px solid lightgray",
        display: "flex",
        justifyContent: "space-between",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <span>{name}</span>
      <Stat label="Attack Bonus" value={attackBonus} />
      <Stat label="Damage Die" value={damageDie} />
      <Stat label="Critical Range" value={criticalRange} />
    </div>
  );
};

export default Weapon;
