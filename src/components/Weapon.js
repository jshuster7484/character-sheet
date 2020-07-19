import React from "react";
import Stat from "./Stat";
import Sum from "./Sum";

const Weapon = (props) => {
  const {
    name,
    attackBonusModifiers,
    damageBonusModifiers,
    damageDie,
    enchantment,
    criticalRange,
    range,
  } = props;

  if (enchantment === "masterwork") {
    attackBonusModifiers.push({
      source: "Masterwork Weapon",
      value: 1,
    });
  } else if (enchantment) {
    attackBonusModifiers.push({
      source: `+${enchantment} Enchantment`,
      value: enchantment,
    });
    damageBonusModifiers.push({
      source: `+${enchantment} Enchantment`,
      value: enchantment,
    });
  }

  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h4>{name}</h4>
          <Sum label="Attack Bonus" modifiers={attackBonusModifiers} />
          <Stat label="Damage Die" value={damageDie} />
          <Sum label="Damage Bonus" modifiers={damageBonusModifiers} />
          {range && <Stat label="Range" value={range} />}
          <Stat label="Critical Range" value={criticalRange} />
        </div>
      </div>
    </div>
  );
};

export default Weapon;
