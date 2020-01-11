import React from "react";
import Skill from "./Skill";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const skills = [
  {
    name: "Acrobatics",
    modifiers: [],
    value: 12,
  },
  {
    name: "Appraise",
    modifiers: [],
    value: 6,
  },
  {
    name: "Bluff",
    modifiers: [
      {
        description: "Feinting",
        value: 3,
      },
      {
        description: "Lying to clergy",
        value: -10,
      },
    ],
    value: 12,
  },
  {
    name: "Diplomacy",
    modifiers: [],
    value: 7,
  },
  {
    name: "Sleight of Hand",
    modifiers: [
      {
        description: "Concealing a dagger",
        value: 6,
      },
    ],
    value: 15,
  },
];

function Skills() {
  return (
    <section className="skills" style={{ maxWidth: 360 }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Skills</h2>
        <Button>Edit</Button>
      </header>
      <List component="nav">
        {skills.map(skill => (
          <Skill
            key={skill.name}
            name={skill.name}
            modifiers={skill.modifiers}
            value={skill.value}
          />
        ))}
      </List>
    </section>
  );
}

export default Skills;
