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

const hasModifier = modifiers => {
  return modifiers !== undefined && modifiers.length > 0;
};

export { getAbilityModifier, getStringNumber, hasModifier };
