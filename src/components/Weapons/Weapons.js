import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Button from "@material-ui/core/Button";
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
    edit: false,
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
      <h2>Weapons</h2>
      {weapons.map((weapon, index) => (
        <Weapon index={index} handleChange={handleChange} weapon={weapon} />
      ))}
      <Button onClick={addWeapon}>Add Weapon</Button>
    </section>
  );
};

export default Weapons;
