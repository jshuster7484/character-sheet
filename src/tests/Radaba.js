import React from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";

const Radaba = () => {
  return (
    <Container>
      <h1>Radaba</h1>
      <Weapon
        name="Bite"
        attackBonusModifiers={[]}
        damageBonusModifiers={[]}
        damageDie="1d6"
        criticalRange="x2"
      />
    </Container>
  );
};

export default Radaba;
