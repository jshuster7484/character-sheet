import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Tooltip from "@material-ui/core/Tooltip";

const Isi = () => {
  const [bab, setBab] = useState(6);
  const [powerAttack, setPowerAttack] = useState(false);

  const handleAttack = (event, newAttack) => {
    if (newAttack) {
      setBab(newAttack);
    }
  };

  const handlePowerAttack = (event, powerAttack) => {
    setPowerAttack(!powerAttack);
  };

  const modifiers = [
    {
      source: "Strength",
      target: "attackBonus",
      value: 5,
    },
    {
      source: "Strength",
      target: "damageBonus",
      value: 5,
    },
  ];

  const attackBonusModifiers = () => {
    const mods = [{ source: "Base Attack Bonus", value: bab }].concat(
      modifiers.filter((mod) => mod.target === "attackBonus"),
    );
    if (powerAttack) {
      mods.push({ source: "Power Attack", value: -2 });
    }
    console.log(mods);
    return mods;
  };

  const damageBonusModifiers = () => {
    const mods = modifiers.filter((mod) => mod.target === "damageBonus");
    if (powerAttack) {
      mods.push({ source: "Power Attack", value: 4 });
    }
    return mods;
  };

  return (
    <Container>
      <h1>Isi</h1>
      <div style={{ marginBottom: "1rem" }}>
        <ToggleButtonGroup exclusive onChange={handleAttack} value={bab}>
          <ToggleButton value={6}>1st Attack</ToggleButton>
          <ToggleButton value={1}>2nd Attack</ToggleButton>
        </ToggleButtonGroup>
        <Tooltip
          arrow
          placement="right"
          title="Take a -2 penalty on melee attack rolls and combat maneuver checks to gain a +4 bonus on melee damage rolls."
        >
          <ToggleButton
            onChange={handlePowerAttack}
            selected={powerAttack}
            style={{ marginLeft: "1rem" }}
            value={powerAttack}
          >
            Power Attack
          </ToggleButton>
        </Tooltip>
      </div>

      <Weapon
        name="Holy Longsword +2"
        attackBonusModifiers={attackBonusModifiers()}
        damageBonusModifiers={damageBonusModifiers()}
        damageDie="1d8"
        enchantment={2}
        criticalRange="19-20/x2"
      />
      <Weapon
        name="Holy Shield +2"
        attackBonusModifiers={[
          { source: "Base Attack Bonus", value: bab },
          { source: "Exotic Weapon", value: -4 },
        ]}
        criticalRange="x2"
        damageBonusModifiers={[]}
        damageDie="1d6"
        enchantment={2}
        range="20 ft."
      />
    </Container>
  );
};

export default Isi;
