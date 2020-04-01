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

export const getAbilityScore = (ability, character, modifiers) => {
  const base = character[ability];
  const modSum = modifiers
    .filter(mod => mod.target === ability)
    .reduce(function(prev, mod) {
      return prev + parseInt(mod.value);
    }, 0);

  return getAbilityModifier(base + modSum);
};

const hasModifier = modifiers => {
  return modifiers !== undefined && modifiers.length > 0;
};

export { getAbilityModifier, getStringNumber, hasModifier };
