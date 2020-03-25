import React from "react";
import { Formik, Field, Form } from "formik";
import { Button, TextField, MenuItem } from "@material-ui/core";

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

const classes = [
  "Barbarian",
  "Bard",
  "Cleric",
  "Druid",
  "Fighter",
  "Monk",
  "Oracle",
  "Paladin",
  "Ranger",
  "Rogue",
  "Sorcerer",
  "Summoner",
  "Wizard",
];

export const abilities = [
  { name: "str", label: "Strength" },
  { name: "dex", label: "Dexterity" },
  { name: "con", label: "Constitution" },
  { name: "int", label: "Intelligence" },
  { name: "wis", label: "Wisdom" },
  { name: "chr", label: "Charisma" },
];

export default function NewCharacterForm(props) {
  const { character, setCharacter, setEdit } = props;

  return (
    <Formik
      initialValues={character}
      onSubmit={values => {
        setCharacter(values);
        setEdit(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div style={{ width: "50%" }}>
            <Field as={TextField} fullWidth name="name" label="Name" />
            <Field as={TextField} name="race" fullWidth label="Race" select>
              {races.map(race => (
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
              select
            >
              {classes.map(characterClass => (
                <MenuItem key={characterClass} value={characterClass}>
                  {characterClass}
                </MenuItem>
              ))}
            </Field>
            <h2>Ability Scores</h2>
            {abilities.map(ability => (
              <Field
                as={TextField}
                name={ability.name}
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
            {/* <h2>Skills</h2>
            <Field as={TextField} type="number" fullWidth label="Acrobatics" />
            <Field as={TextField} type="number" fullWidth label="Appraise" />
            <Field as={TextField} type="number" fullWidth label="Bluff" />
            <Field as={TextField} type="number" fullWidth label="Climbing" />
            <Field as={TextField} type="number" fullWidth label="Diplomacy" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Disable Device"
            />
            <Field as={TextField} type="number" fullWidth label="Disguise" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Escape Artist"
            />
            <Field as={TextField} type="number" fullWidth label="Fly" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Handle Animal"
            />
            <Field as={TextField} type="number" fullWidth label="Heal" />
            <Field as={TextField} type="number" fullWidth label="Intimidate" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Arcana)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Dungeoneering)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Engineering)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Geography)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (History)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Local)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Nature)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Nobility)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Planes)"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Knowledge (Religion)"
            />
            <Field as={TextField} type="number" fullWidth label="Linguistics" />
            <Field as={TextField} type="number" fullWidth label="Perception" />
            <Field as={TextField} type="number" fullWidth label="Ride" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Sense Motive"
            />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Sleight of Hand"
            />
            <Field as={TextField} type="number" fullWidth label="Spellcraft" />
            <Field as={TextField} type="number" fullWidth label="Stealth" />
            <Field as={TextField} type="number" fullWidth label="Survival" />
            <Field as={TextField} type="number" fullWidth label="Swim" />
            <Field
              as={TextField}
              type="number"
              fullWidth
              label="Use Magic Device"
            /> */}
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
