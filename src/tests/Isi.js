import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Weapon from "../components/Weapon";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import ToggleButton from "@material-ui/lab/ToggleButton";

const Isi = () => {
  const [bab, setBab] = useState(6);

  const handleAttack = (event, newAttack) => {
    setBab(newAttack);
  };

  return (
    <Container>
      <h1>Isi</h1>
      <ToggleButtonGroup
        exclusive
        onChange={handleAttack}
        style={{ paddingBottom: "1rem" }}
        value={bab}
      >
        <ToggleButton value={6}>1st Attack</ToggleButton>
        <ToggleButton value={1}>2nd Attack</ToggleButton>
      </ToggleButtonGroup>
      <Weapon
        name="Holy Longsword +2"
        attacks={[
          {
            name: "One Handed",
            bonus: bab + 7,
            damage: "1d8 + 7",
          },
          {
            name: "Two Handed",
            bonus: bab + 7,
            damage: "1d8 + 9",
          },
          {
            name: "Power Attack",
            bonus: bab + 5,
            damage: "1d8 + 11",
          },
          {
            name: "Two Handed Power Attack",
            bonus: bab + 5,
            damage: "1d8 + 15",
          },
          { name: "Bonus Damage vs. Evil", damage: "+1d8" },
        ]}
        criticalRange="19-20/x2"
      />
      <Weapon
        name="Holy Shield +2"
        criticalRange="x2"
        attacks={[
          {
            name: "Throw",
            bonus: bab - 2,
            damage: "1d6 + 2",
            range: "20 ft.",
          },
        ]}
      />
    </Container>
  );
};

export default Isi;
