import React, { useState } from "react";
import portrait from "../corvo.jpg";
import Stat from "./Stat";
import { useData } from "../App";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export default function Portrait() {
  const [health, setHealth] = useState(0);
  const [data, setData] = useData();
  const bloodPercentage = (1 - data.hp / data.max_hp) * 100 + "%";

  const handleChange = e => {
    setHealth(parseInt(e.target.value));
  };

  const handleClick = () => {
    let newHp;
    if (data.hp + health > data.max_hp) {
      newHp = data.max_hp;
    } else if (data.hp + health < 0) {
      newHp = 0;
    } else {
      newHp = data.hp + health;
    }
    setData({ ...data, hp: newHp });
    setHealth(0);
  };

  const buttonText = () => {
    if (health > 0) {
      return "Heal";
    }
    if (health < 0) {
      return "Damage";
    }
    return "Apply";
  };

  return (
    <section className="portrait">
      <div className="portraitWrapper">
        <img
          alt="Character Portrait"
          className="portraitImage"
          src={portrait}
        />
        <div className="portraitBlood" style={{ height: bloodPercentage }} />
      </div>
      <div>
        <Stat label="Hit Points" value={`${data.hp}/${data.max_hp}`} />
      </div>
      <div>
        <TextField
          InputProps={{ inputProps: { min: -500, max: 500, type: "number" } }}
          style={{ width: "5rem" }}
          onChange={handleChange}
          value={health}
        />
        <Button onClick={handleClick}>{buttonText()}</Button>
      </div>
    </section>
  );
}
