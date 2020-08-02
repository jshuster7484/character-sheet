import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditWeapon from "./EditWeapon";
import Stat from "../Stat";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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

  return (
    <Accordion style={{ marginBottom: "1rem" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <strong>{weapon.name}</strong>
          <em style={{ fontSize: "12px" }}>
            Critical Range: {weapon.criticalRange}
          </em>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr 1fr",
              marginTop: "1rem",
            }}
          >
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
          </div>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <EditWeapon
          index={index}
          handleChange={handleChange}
          identifier={identifier}
          weapon={weapon}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Weapon;
