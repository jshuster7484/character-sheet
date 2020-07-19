import React from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";

const Zara = () => {
  const modifiers = [
    {
      source: "Base Attack Bonus",
      target: "attackBonus",
      value: 4,
    },
    {
      source: "Dexterity",
      target: "attackBonus",
      value: 5,
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
      <h1>Zara</h1>
      <Weapon
        name="Light Crossbow"
        attackBonusModifiers={attackBonusModifiers}
        damageBonusModifiers={[]}
        criticalRange="19-20/x2"
        damageDie="1d8"
        range="80 ft."
      />
      <Weapon
        name="Dagger (Borrowed from Ash)"
        attackBonusModifiers={[{ source: "Base Attack Bonus", value: 4 }]}
        damageBonusModifiers={[]}
        criticalRange="19-20/x2"
        attackBonus="+0"
        damageDie="1d4"
      />
    </Container>
  );
};

export default Zara;
