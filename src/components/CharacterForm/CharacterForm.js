import React, { useEffect } from "react";
import { Formik, Field, Form } from "formik";
import { Button, TextField, MenuItem, Snackbar } from "@material-ui/core";
import SkillField from "./SkillField";
import SkillPointsAvailable from "./SkillPointsAvailable";
import { getAbilityModifier } from "../../utils";
import * as abilities from "../../data/abilities";
import * as skills from "../../data/skills";
import * as classes from "../../data/classes";

const races = [
  "Aasimar",
  "Dwarf",
  "Elf",
  "Gnome",
  "Half-Elf",
  "Half-Orc",
  "Halfling",
  "Human",
];

export default function NewCharacterForm(props) {
  const { character, setCharacter, setEdit } = props;
  return (
    <Formik
      initialValues={character}
      onSubmit={(values) => {
        setCharacter(values);
        setEdit(false);
      }}
    >
      {({ handleChange, setFieldValue, values }) => {
        const handleClassChange = (newClass) => {
          setFieldValue(
            "skillRanksPerLevel",
            classes[newClass].skillRanksPerLevel,
          );
        };

        return (
          <Form>
            <section
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div style={{ flex: 1, maxWidth: "500px" }}>
                <Field as={TextField} fullWidth name="name" label="Name" />
                <Field as={TextField} name="race" fullWidth label="Race" select>
                  {races.map((race) => (
                    <MenuItem key={race} value={race}>
                      {race}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  name="characterClass"
                  fullWidth
                  label="Class"
                  onChange={(e) => {
                    handleChange(e);
                    handleClassChange(e.target.value);
                  }}
                  select
                >
                  {Object.values(classes).map((characterClass) => (
                    <MenuItem
                      key={characterClass.label}
                      value={characterClass.label}
                    >
                      {characterClass.label}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  fullWidth
                  name="level"
                  label="Level"
                  type="number"
                />

                <h2>Ability Scores</h2>
                {Object.values(abilities).map((ability) => (
                  <Field
                    as={TextField}
                    name={ability.key}
                    type="number"
                    fullWidth
                    label={ability.label}
                  />
                ))}
                <h2>Defense</h2>
                <Field
                  as={TextField}
                  name="hitPoints"
                  type="number"
                  fullWidth
                  label="Hit Points"
                />
                <Field
                  as={TextField}
                  name="fortitude"
                  type="number"
                  fullWidth
                  label="Fortitude Bonus"
                />
                <Field
                  as={TextField}
                  name="reflex"
                  type="number"
                  fullWidth
                  label="Reflex Bonus"
                />
                <Field
                  as={TextField}
                  name="will"
                  type="number"
                  fullWidth
                  label="Will Bonus"
                />
                <Field
                  as={TextField}
                  name="cmd"
                  type="number"
                  fullWidth
                  label="Combat Maneuver Defense"
                />

                <h2>Offense</h2>
                <Field
                  as={TextField}
                  name="initiative"
                  type="number"
                  fullWidth
                  label="Initiative Bonus"
                />
                <Field
                  as={TextField}
                  name="speed"
                  type="number"
                  fullWidth
                  label="Base Speed"
                />
                <Field
                  as={TextField}
                  name="cmb"
                  type="number"
                  fullWidth
                  label="Combat Manuever Bonus"
                />
              </div>
              {/* <div style={{ flex: 1, maxWidth: "500px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>Skills</h2>
                  <SkillPointsAvailable
                    level={values.level}
                    skillRanksPerLevel={values.skillRanksPerLevel}
                    intMod={getAbilityModifier(values.intelligence)}
                  />
                </div>
                {Object.values(skills).map((skill) => (
                  <SkillField {...skill} />
                ))}
              </div> */}
            </section>
            <Button type="submit">Submit</Button>
          </Form>
        );
      }}
    </Formik>
  );
}
