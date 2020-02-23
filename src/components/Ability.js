import React from "react";
import { getAbilityModifier } from "../utils";
import Stat from "./Stat";

export default function Ability(props) {
  const { name, modifiers, value } = props;

  return (
    <Stat
      label={name}
      value={getAbilityModifier(value)}
      modifiers={modifiers}
    />
  );
}
