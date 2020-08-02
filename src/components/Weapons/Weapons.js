import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

import Weapon from "./Weapon";

const Weapons = ({ handleChange }) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { weapons } = characters[activeCharacterIndex];

  const newWeapon = {
    name: "New Weapon",
    attackBonus: [],
    criticalRange: "",
    damageBonus: [],
    damageDie: "1d4",
    extraDamage: { name: "", value: "" },
    attackAbility: "Strength",
    damageAbility: "Strength",
  };

  const addWeapon = () => {
    dispatch({
      type: "add_item",
      payload: {
        key: `characters[${activeCharacterIndex}].weapons`,
        value: newWeapon,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <section>
      <header style={{ alignItems: "center", display: "flex" }}>
        <h2>Weapons</h2>
        <IconButton onClick={addWeapon}>
          <AddIcon />
        </IconButton>
      </header>
      {weapons.map((weapon, index) => (
        <Weapon
          key={index}
          index={index}
          handleChange={handleChange}
          weapon={weapon}
        />
      ))}
    </section>
  );
};

export default Weapons;
