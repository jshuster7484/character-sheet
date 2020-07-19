import React from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";

const Ash = () => {
  const modifiers = [
    {
      source: "Base Attack Bonus",
      target: "attackBonus",
      value: 4,
    },
    {
      source: "Belt of Accuracy",
      target: "attackBonus",
      value: 2,
    },
    {
      source: "Weapon Focus",
      target: "attackBonus",
      value: 1,
    },
    {
      source: "Two Weapon Fighting",
      target: "attackBonus",
      value: -2,
    },
    {
      source: "Dexterity",
      target: "attackBonus",
      value: 6,
    },
    {
      source: "Dexterity",
      target: "damageBonus",
      value: 6,
    },
    {
      source: "River Rat",
      target: "damageBonus",
      value: 1,
    },
  ];

  const attackBonusModifiers = modifiers.filter(
    (mod) => mod.target === "attackBonus",
  );

  const damageBonusModifiers = modifiers.filter(
    (mod) => mod.target === "damageBonus",
  );
  return (
    <Container>
      <h1>Ash</h1>
      <Weapon
        attackBonusModifiers={attackBonusModifiers}
        damageBonusModifiers={damageBonusModifiers}
        finesse
        enchantment="masterwork"
        name="Masterwork Dagger"
        criticalRange="19-20/x2"
        damageDie="1d4"
      />
      <Weapon
        attackBonusModifiers={attackBonusModifiers}
        damageBonusModifiers={damageBonusModifiers}
        name="Sap"
        criticalRange="x2"
        damageDie="1d6"
      />
      <Weapon
        attackBonusModifiers={attackBonusModifiers}
        damageBonusModifiers={damageBonusModifiers}
        name="Dagger"
        criticalRange="19-20/x2"
        damageDie="1d4"
        finesse
      />
    </Container>
  );
};

export default Ash;
