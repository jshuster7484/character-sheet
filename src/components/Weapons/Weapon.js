import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditWeapon from "./EditWeapon";
import Stat from "../Stat";
import Sum from "../Sum";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

const Weapon = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { characters, activeCharacterIndex } = state;
  const { abilities, baseAttackBonus } = characters[activeCharacterIndex];
  const { index, handleChange, weapon } = props;

  const identifier = `weapons[${index}]`;

  const attackBonusArray = () => {
    return [
      {
        source: "Base Attack Bonus",
        value: baseAttackBonus,
      },
      {
        source: weapon.attackAbility,
        value: abilities[weapon.attackAbility.toLowerCase()].modifier,
      },
    ].concat(weapon.attackBonus);
  };

  const damageBonusArray = () => {
    return [
      {
        source: weapon.damageAbility,
        value: abilities[weapon.damageAbility.toLowerCase()].modifier,
      },
    ].concat(weapon.damageBonus);
  };

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
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          {!weapon.edit ? (
            <>
              <strong>{weapon.name}</strong>
              {weapon.criticalRange && (
                <em style={{ fontSize: "12px" }}>
                  Critical Range: {weapon.criticalRange}
                </em>
              )}
            </>
          ) : (
            <>
              <TextField
                label="Weapon Name"
                onChange={(e) =>
                  handleChange(`${identifier}.name`, e.target.value)
                }
                style={{ fontWeight: "bold" }}
                value={weapon.name}
              />
              <TextField
                label="Critical Range"
                placeholder="x2"
                onChange={(e) =>
                  handleChange(`${identifier}.criticalRange`, e.target.value)
                }
                value={weapon.criticalRange}
              />
            </>
          )}
        </div>
        <IconButton
          onClick={(e) => handleChange(`${identifier}.edit`, !weapon.edit)}
        >
          <EditIcon />
        </IconButton>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          marginTop: "1rem",
        }}
      >
        <Sum label="Attack Bonus" modifiers={attackBonusArray()} />
        <Stat label="Damage Die" value={weapon.damageDie} />
        <Sum label="Damage Bonus" modifiers={damageBonusArray()} />
        {weapon.extraDamage.name && (
          <Stat
            label={weapon.extraDamage.name}
            value={weapon.extraDamage.value}
          />
        )}
      </div>
      {weapon.edit && (
        <EditWeapon
          index={index}
          handleChange={handleChange}
          identifier={identifier}
          weapon={weapon}
        />
      )}
    </div>
  );
};

export default Weapon;
