import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditWeapon from "./EditWeapon";
import Stat from "../Stat";
import { Card, CardActionArea, CardContent, Dialog } from "@material-ui/core";

const Weapon = ({ index, handleChange, weapon }) => {
  const context = useContext(AppContext);
  const { state } = context;
  const { characters, activeCharacterIndex } = state;
  const { abilities, baseAttackBonus } = characters[activeCharacterIndex];

  const identifier = `weapons[${index}]`;

  const attackBonus = () => {
    return (
      baseAttackBonus +
      abilities[weapon.attackAbility.toLowerCase()].modifier +
      weapon.attackBonus.reduce(
        (accumulator, bonus) => accumulator + bonus.value,
        0,
      )
    );
  };

  const damageBonus = () => {
    return (
      abilities[weapon.damageAbility.toLowerCase()].modifier +
      weapon.damageBonus.reduce(
        (accumulator, bonus) => accumulator + bonus.value,
        0,
      )
    );
  };

  const handleOpen = () => {
    handleChange(`${identifier}.edit`, true);
  };

  const handleClose = () => {
    handleChange(`${identifier}.edit`, false);
  };

  return (
    <>
      <Card style={{ margin: "0.5rem" }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent
            style={{
              alignItems: "center",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
              padding: "1rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>{weapon.name}</strong>
              <em style={{ fontSize: "12px" }}>
                Critical Range: {weapon.criticalRange}
              </em>
            </div>
            <Stat label="Attack Bonus" value={attackBonus()} />
            <Stat label="Damage Die" value={weapon.damageDie} />
            <Stat label="Damage Bonus" value={damageBonus()} />
            {weapon.extraDamage.name && (
              <Stat
                label={weapon.extraDamage.name}
                value={weapon.extraDamage.value}
              />
            )}
          </CardContent>
        </CardActionArea>
      </Card>
      <EditWeapon
        onClose={handleClose}
        open={weapon.edit}
        index={index}
        handleChange={handleChange}
        identifier={identifier}
        weapon={weapon}
      />
    </>
  );
};

export default Weapon;
