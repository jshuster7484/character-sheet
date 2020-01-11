import React from "react";
import { getAbilityModifier } from "../utils";
import Stat from "./Stat";

export default function Ability(props) {
  const { name, score } = props;
  return <Stat label={name} value={getAbilityModifier(score)} />;
}
