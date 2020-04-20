import React from "react";
import Stat from "./Stat";
import { getAbilityScore, getStringNumber } from "../utils";

const ArmorClass = (props) => {
  const { character, inventory, modifiers } = props;

  const initial = [
    { label: "Base", value: 10 },
    {
      label: "Dexterity",
      value: getAbilityScore("dexterity", character, modifiers),
    },
  ];

  const items = inventory
    .filter((item) => item.armorBonus > 0)
    .map((item) => {
      return { label: item.name, value: getStringNumber(item.armorBonus) };
    });

  const mods = initial.concat(items);

  const sum = mods.reduce(function (prev, mod) {
    return prev + parseInt(mod.value);
  }, 0);

  return <Stat label="Armor Class" modifiers={mods} value={sum} />;
};

export default ArmorClass;
