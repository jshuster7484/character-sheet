import React from "react";
import { getAbilityModifier } from "../utils";
import Stat from "./Stat";
import { useData } from "../App";

export default function Ability(props) {
  const [data] = useData();
  const { name } = props;

  const ability = data.abilities.find(ability => ability.name === name);

  console.log(ability);

  return (
    <Stat
      label={ability.name}
      value={getAbilityModifier(ability.value)}
      modifiers={ability.modifiers}
    />
  );
}
