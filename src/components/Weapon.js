import React from "react";
import Stat from "./Stat";
import { getStringNumber } from "../utils";

const Weapon = (props) => {
  // const { attackBonus, criticalRange, damage, name } = props;
  const { name, attacks, attackBonus, damage, criticalRange, range } = props;

  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>{name}</h4>
        <Stat label="Critical Range" value={criticalRange} />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {attacks.map((attack) => (
          <div
            style={{
              alignItems: "center",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{attack.name}</span>
            <Stat label="Attack Bonus" value={getStringNumber(attack.bonus)} />
            <Stat label="Damage" value={attack.damage} />
            {attack.range && <Stat label="Range" value={attack?.range} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Weapon;
