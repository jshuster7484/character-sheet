import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditDialog from "../shared/EditDialog";
import { FormControlLabel, Switch, TextField } from "@material-ui/core";

const spellLevels = [
  { value: 0, label: "Cantrip" },
  { value: 1, label: "Level 1" },
  { value: 2, label: "Level 2" },
  { value: 3, label: "Level 3" },
  { value: 4, label: "Level 4" },
  { value: 5, label: "Level 5" },
  { value: 6, label: "Level 6" },
  { value: 7, label: "Level 7" },
  { value: 8, label: "Level 8" },
  { value: 9, label: "Level 9" },
];

const EditCustomSpell = ({
  open,
  onClose,
  handleChange,
  identifier,
  index,
  spell,
}) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex } = state;

  const deleteSpell = () => {
    dispatch({
      type: "delete_item",
      payload: {
        key: `characters[${activeCharacterIndex}].spells[${spell.slalevel}].known`,
        value: index,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <EditDialog
      open={open}
      onClose={onClose}
      title={spell.name}
      handleDelete={deleteSpell}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            onChange={(e) => handleChange(`${identifier}.name`, e.target.value)}
            name="name"
            label="Name"
            value={spell.name}
          />
          <TextField
            onChange={(e) =>
              handleChange(`${identifier}.school`, e.target.value)
            }
            name="school"
            label="School"
            value={spell.school}
          />
          <TextField
            onChange={(e) =>
              handleChange(`${identifier}.subschool`, e.target.value)
            }
            name="subschool"
            label="Subschool"
            value={spell.subschool}
          />
          <strong>CASTING</strong>
          <span>Casting Time: {spell.castingtime}</span>
          <span>Components: {spell.components}</span>
          <strong>EFFECT</strong>
          <span>Range: {spell.range}</span>
          {spell.targets && <span>Target: {spell.targets}</span>}
          <span>Duration: {spell.duration}</span>
          <span>Saving Throw: {spell.savingthrow}</span>
          <span>Spell Resistance: {spell.spellresistance}</span>
          <p>{spell.description}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={
              <Switch
                checked={spell.power}
                onChange={(e) =>
                  handleChange(`${identifier}.power`, e.target.checked)
                }
              />
            }
            label="Power"
          />
          <TextField
            label="Spell Level"
            onChange={(e) => handleChange(`${identifier}.dc`, e.target.value)}
            value={spell.slalevel}
          />
          <TextField
            label="Spell DC"
            onChange={(e) => handleChange(`${identifier}.dc`, e.target.value)}
            value={spell.dc}
          />
        </div>
      </div>
    </EditDialog>
  );
};

export default EditCustomSpell;
