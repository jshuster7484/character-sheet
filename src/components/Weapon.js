import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Bonus from "./Bonus";
import Stat from "./Stat";
import Sum from "./Sum";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const emptyBonus = {
  source: "",
  value: 0,
};

const abilityNames = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

const damageDice = [
  "1",
  "1d2",
  "1d3",
  "1d4",
  "1d6",
  "1d8",
  "1d10",
  "1d12",
  "2d6",
  "2d8",
  "3d6",
  "3d8",
  "4d6",
];

const Weapon = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { abilities, baseAttackBonus } = state;
  const { index, weapon } = props;

  const handleChange = (key, value) => {
    dispatch({
      type: "on_input",
      payload: {
        key,
        value,
      },
    });
    dispatch({ type: "save_data" });
  };

  const addItem = (path) => {
    dispatch({
      type: "add_item",
      payload: { key: path, value: emptyBonus },
    });
    dispatch({ type: "save_data" });
  };

  const deleteWeapon = () => {
    dispatch({
      type: "delete_item",
      payload: { key: "weapons", value: index },
    });
    dispatch({ type: "save_data" });
  };

  const editPanel = () => (
    <>
      <div>
        <TextField
          label="Attack Ability"
          select
          onChange={(e) =>
            handleChange(`${identifier}.attackAbility`, e.target.value)
          }
          style={{ width: "200px" }}
          value={weapon.attackAbility}
          variant="outlined"
        >
          {abilityNames.map((ability) => (
            <MenuItem key={ability} value={ability}>
              {ability}
            </MenuItem>
          ))}
        </TextField>
        <h5>Attack Bonuses</h5>
        {weapon.attackBonus.map((bonus, attackBonusIndex) => (
          <Bonus
            bonus={bonus}
            identifier={`${identifier}.attackBonus`}
            index={attackBonusIndex}
          />
        ))}
        <Button onClick={() => addItem(`${identifier}.attackBonus`)}>
          Add Bonus
        </Button>
      </div>
      <div>
        <TextField
          label="Damage Die"
          select
          onChange={(e) =>
            handleChange(`${identifier}.damageDie`, e.target.value)
          }
          style={{ width: "200px" }}
          value={weapon.damageDie}
          variant="outlined"
        >
          {damageDice.map((dice) => (
            <MenuItem key={dice} value={dice}>
              {dice}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          label="Damage Ability"
          select
          onChange={(e) =>
            handleChange(`${identifier}.damageAbility`, e.target.value)
          }
          style={{ width: "200px" }}
          value={weapon.damageAbility}
          variant="outlined"
        >
          {abilityNames.map((ability) => (
            <MenuItem key={ability} value={ability}>
              {ability}
            </MenuItem>
          ))}
        </TextField>
        <h5>Damage Bonuses</h5>
        {weapon.damageBonus.map((bonus, damageBonusIndex) => (
          <Bonus
            bonus={bonus}
            identifier={`${identifier}.damageBonus`}
            index={damageBonusIndex}
          />
        ))}
        <Button onClick={() => addItem(`${identifier}.damageBonus`)}>
          Add Bonus
        </Button>
      </div>
    </>
  );

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
        {!weapon.edit && <strong>{weapon.name}</strong>}
        {weapon.edit && (
          <TextField
            label="Weapon Name"
            onChange={(e) => handleChange(`${identifier}.name`, e.target.value)}
            style={{ fontWeight: "bold" }}
            value={weapon.name}
          />
        )}
        <IconButton
          onClick={(e) => handleChange(`${identifier}.edit`, !weapon.edit)}
        >
          <EditIcon />
        </IconButton>
      </div>
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <Sum label="Attack Bonus" modifiers={attackBonusArray()} />
          <Stat label="Damage Die" value={weapon.damageDie} />
          <Sum label="Damage Bonus" modifiers={damageBonusArray()} />
          {weapon.edit && editPanel()}
        </div>
      </div>
      {weapon.edit && (
        <Button color="secondary" onClick={deleteWeapon} variant="contained">
          Delete
        </Button>
      )}
    </div>
  );
};

export default Weapon;
