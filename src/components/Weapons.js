import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Button from "@material-ui/core/Button";
import Weapon from "../components/Weapon";

const Weapons = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { weapons } = state;

  const newWeapon = {
    name: "New Weapon",
    attackBonus: [],
    damageBonus: [],
    damageDie: "1d4",
    attackAbility: "Strength",
    damageAbility: "Strength",
    edit: false,
  };

  const addWeapon = () => {
    dispatch({
      type: "add_item",
      payload: { key: "weapons", value: newWeapon },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <section>
      <h2>Weapons</h2>
      {weapons.map((weapon, index) => (
        <Weapon index={index} weapon={weapon} />
      ))}
      <Button onClick={addWeapon}>Add Weapon</Button>
    </section>
  );
};

export default Weapons;
