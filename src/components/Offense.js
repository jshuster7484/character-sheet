import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Stat from "./Stat";
import Weapon from "./Weapon";
// import WeaponForm from "./WeaponForm";
import Button from "@material-ui/core/Button";

export default function Offense() {
  const context = useContext(AppContext);
  const { state } = context;
  const { initiative, speed, cmb } = state;
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <section className="offense">
      <h1>Offense</h1>
      <div style={{ display: "flex" }}>
        <Stat label="Initiative" value={initiative} />
        <Stat label="Speed" value={speed} />
        <Stat label="CMB" value={cmb} />
      </div>
      <Button onClick={handleOpen}>Add Weapon</Button>
      {/* <WeaponForm /> */}
      {/* <h1>Attacks</h1>
      <Weapon
        attackBonus="+4"
        criticalRange="x2"
        damageBonus={1}
        damageDie="1d3"
        damageType="Bludgeoning"
        name="Unarmed Strike"
      />
      <Weapon
        attackBonus="+10"
        criticalRange="19-20/x2"
        damageDie="1d8"
        damageBonus={1}
        damageType="Slashing"
        name="Longsword +1"
      /> */}
    </section>
  );
}
