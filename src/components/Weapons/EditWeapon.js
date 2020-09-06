import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Bonus from "./Bonus";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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

const EditWeapon = ({ identifier, index, handleChange, weapon }) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { activeCharacterIndex } = state;

  const emptyBonus = {
    source: "",
    value: 0,
  };

  const addBonus = (path) => {
    dispatch({
      type: "add_item",
      payload: {
        key: `characters[${activeCharacterIndex}].${path}`,
        value: emptyBonus,
      },
    });
    dispatch({ type: "save_data" });
  };

  const deleteWeapon = () => {
    dispatch({
      type: "delete_item",
      payload: {
        key: `characters[${activeCharacterIndex}].weapons`,
        value: index,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <div style={{ flexDirection: "row", margin: "1rem" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <TextField
          label="Weapon Name"
          onChange={(e) => handleChange(`${identifier}.name`, e.target.value)}
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
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div style={{ margin: "1rem" }}>
          <TextField
            fullWidth
            label="Attack Ability"
            select
            onChange={(e) =>
              handleChange(`${identifier}.attackAbility`, e.target.value)
            }
            value={weapon.attackAbility}
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
              handleChange={handleChange}
              identifier={`${identifier}.attackBonus`}
              index={attackBonusIndex}
            />
          ))}
          <Button
            onClick={() => addBonus(`${identifier}.attackBonus`)}
            style={{ marginTop: "1rem" }}
            variant="contained"
          >
            Add Bonus
          </Button>
        </div>
        <div style={{ margin: "1rem" }}>
          <TextField
            fullWidth
            label="Damage Die"
            select
            onChange={(e) =>
              handleChange(`${identifier}.damageDie`, e.target.value)
            }
            value={weapon.damageDie}
          >
            {damageDice.map((dice) => (
              <MenuItem key={dice} value={dice}>
                {dice}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Damage Ability"
            select
            onChange={(e) =>
              handleChange(`${identifier}.damageAbility`, e.target.value)
            }
            value={weapon.damageAbility}
          >
            {abilityNames.map((ability) => (
              <MenuItem key={ability} value={ability}>
                {ability}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            label="Extra Damage Name"
            onChange={(e) =>
              handleChange(`${identifier}.extraDamage.name`, e.target.value)
            }
            value={weapon.extraDamage.name}
          />
          <TextField
            fullWidth
            label="Extra Damage Value"
            onChange={(e) =>
              handleChange(`${identifier}.extraDamage.value`, e.target.value)
            }
            value={weapon.extraDamage.value}
          />
          <h5>Damage Bonuses</h5>
          {weapon.damageBonus.map((bonus, damageBonusIndex) => (
            <Bonus
              bonus={bonus}
              handleChange={handleChange}
              identifier={`${identifier}.damageBonus`}
              index={damageBonusIndex}
            />
          ))}
          <Button
            onClick={() => addBonus(`${identifier}.damageBonus`)}
            style={{ marginTop: "1rem" }}
            variant="contained"
          >
            Add Bonus
          </Button>
        </div>
        <Button
          color="secondary"
          onClick={deleteWeapon}
          style={{ gridColumn: 1, justifySelf: "flex-start" }}
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default EditWeapon;
