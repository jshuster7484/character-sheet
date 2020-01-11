function getStringNumber(number) {
  if (number > 0) {
    return "+" + number;
  } else {
    return number.toString();
  }
}

function getAbilityModifier(abilityScore) {
  return getStringNumber(Math.floor((abilityScore - 10) / 2));
}

export { getAbilityModifier, getStringNumber };
