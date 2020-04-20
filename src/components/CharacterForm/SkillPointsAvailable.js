import React from "react";
import Stat from "../Stat";

const SkillPointsAvailable = ({ level, skillRanksPerLevel, intMod }) => {
  const skillPointsAvailable = level * (skillRanksPerLevel + intMod);

  // Create FormulaStat

  return (
    <>
      <Stat label="Skill Points Available" value={skillPointsAvailable} />
    </>
  );
};

export default SkillPointsAvailable;
