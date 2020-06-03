import React from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";

const Zara = () => {
  return (
    <Container>
      <h1>Zara</h1>
      <Weapon
        name="Light Crossbow"
        criticalRange="19-20/x2"
        attacks={[{ name: "Shoot", bonus: 5, damage: "1d8", range: "80 ft." }]}
      />
      <Weapon
        name="Dagger (Borrowed from Ash)"
        criticalRange="19-20/x2"
        attacks={[
          { name: "Attack", bonus: 0, damage: "1d4" },
          { name: "Throw", bonus: 0, damage: "1d4", range: "10 ft." },
        ]}
        attackBonus="+0"
        damage="1d4"
      />
    </Container>
  );
};

export default Zara;
