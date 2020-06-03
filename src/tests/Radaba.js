import React from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";

const Radaba = () => {
  return (
    <Container>
      <h1>Radaba</h1>
      <Weapon
        name="Tail Whip"
        criticalRange="None"
        attacks={[
          { name: "Attack", bonus: 0, damage: "It's not very effective" },
        ]}
      />
    </Container>
  );
};

export default Radaba;
