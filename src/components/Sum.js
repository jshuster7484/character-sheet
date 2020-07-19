import React from "react";
import Stat from "./Stat";
import { getStringNumber } from "../utils";

const compare = (a, b) => {
  let comparison = 0;
  if (a.value > b.value) {
    comparison = -1;
  } else if (a.value < b.value) {
    comparison = 1;
  }
  return comparison;
};

export default function Sum(props) {
  const { label, modifiers } = props;

  const sum = modifiers.reduce((a, b) => a + (b["value"] || 0), 0);

  return (
    <Stat
      label={label}
      value={getStringNumber(sum)}
      modifiers={modifiers.sort(compare)}
    />
  );
}
