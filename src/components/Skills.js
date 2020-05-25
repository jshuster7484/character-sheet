import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import Skill from "./Skill";

const Skills = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { abilityModifiers, edit, skills, skillFilter } = state;

  const handleFilter = (event, newFilter) => {
    dispatch({
      type: "on_input",
      payload: { key: "skillFilter", value: newFilter },
    });
    dispatch({
      type: "save_data",
    });
  };

  const filter = (skill) => {
    if (skillFilter === "class") {
      return skill.classSkill === true;
    }
    if (skillFilter === "trained") {
      return skill.ranks > 0;
    }
    return skill;
  };

  const setSkill = (index, value) => {
    dispatch({
      type: "edit_skill",
      payload: { key: index, value: value },
    });
    dispatch({
      type: "save_data",
    });
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
        <ToggleButtonGroup
          exclusive
          onChange={handleFilter}
          value={skillFilter}
        >
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
          .filter((skill) => filter(skill))
          .map((skill, index) => (
            <Skill
              key={skill.name}
              abilityMod={abilityModifiers[skill.ability]}
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
