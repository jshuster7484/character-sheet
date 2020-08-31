import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditWeapon from "./EditWeapon";
import Stat from "../Stat";
import Paper from "@material-ui/core/Paper";
import { Button, Dialog } from "@material-ui/core";

const Weapon = (props) => {
  const context = useContext(AppContext);
  const { state } = context;
  const { characters, activeCharacterIndex } = state;
  const { abilities, baseAttackBonus } = characters[activeCharacterIndex];
  const { index, handleChange, weapon } = props;

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
      <Paper
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 32px",
          padding: "1rem",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong>{weapon.name}</strong>
          <em style={{ fontSize: "12px" }}>
            Critical Range: {weapon.criticalRange}
          </em>
        </div>
        <Stat
          handleClick={(event) => {
            event.stopPropagation();
          }}
          label="Attack Bonus"
          value={attackBonus()}
        />
        <Stat
          handleClick={(event) => {
            event.stopPropagation();
          }}
          label="Damage Die"
          value={weapon.damageDie}
        />
        <Stat
          handleClick={(event) => {
            event.stopPropagation();
          }}
          label="Damage Bonus"
          value={damageBonus()}
        />
        {weapon.extraDamage.name && (
          <Stat
            handleClick={(event) => {
              event.stopPropagation();
            }}
            label={weapon.extraDamage.name}
            value={weapon.extraDamage.value}
          />
        )}
        <Button
          style={{ alignSelf: "center", justifySelf: "flex-end" }}
          onClick={handleOpen}
        >
          Edit
        </Button>
      </Paper>
      <Dialog onClose={handleClose} open={weapon.edit} maxWidth="lg">
        <EditWeapon
          index={index}
          handleChange={handleChange}
          identifier={identifier}
          weapon={weapon}
        />
      </Dialog>
    </>
  );
};

export default Weapon;
