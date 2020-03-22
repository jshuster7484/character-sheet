import React from "react";
import { getAbilityModifier } from "../utils";
import Stat from "./Stat";

export default function Ability(props) {
  const { name, modifiers, base } = props;

  const total = modifiers
    ? parseInt(base) +
      modifiers.reduce(function(prev, item) {
        return prev + parseInt(item.modValue);
      }, 0)
    : parseInt(base);

  return (
    <Stat
      label={name}
      value={getAbilityModifier(total)}
      modifiers={modifiers}
    />
  );
}
