import React, { useState, PureComponent } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Skill from "./Skill";

const Skills = (props) => {
  const { abilityMods, edit, initialSkills } = props;
  const [skills, setSkills] = useState(initialSkills);
  const [filter, setFilter] = useState(null);

  const handleFilter = (event, newFilter) => {
    setFilter(newFilter);
  };

  const skillFilter = (skill) => {
    if (filter === "class") {
      return skill.classSkill === true;
    }
    if (filter === "trained") {
      return skill.ranks > 0;
    }
    return skill;
  };

  const setSkill = (index, value) => {
    const newSkills = [...skills];
    newSkills[index].ranks = value;
    setSkills(newSkills);
  };

  return (
    <section style={{ width: "20rem" }}>
      <header
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Skills</h1>
        <ToggleButtonGroup exclusive onChange={handleFilter} value={filter}>
          <ToggleButton value="class">Class</ToggleButton>
          <ToggleButton value="trained">Trained</ToggleButton>
        </ToggleButtonGroup>
      </header>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>Name</h5>
        <h5>Bonus</h5>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {skills
          .filter((skill) => skillFilter(skill))
          .map((skill, index) => (
            <Skill
              abilityMod={abilityMods[skill.ability]}
              classSkill={skill.classSkill}
              index={index}
              edit={edit}
              name={skill.name}
              ranks={skill.ranks}
              setSkill={setSkill}
            />
          ))}
      </div>
    </section>
  );
};

export default Skills;
