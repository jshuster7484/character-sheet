import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import EditDialog from "../shared/EditDialog";
import { TextField } from "@material-ui/core";

const EditSpell = ({
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
      <span>School: {spell.school}</span>
      {spell.subschool && <span>Subschool: {spell.subschool}</span>}
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
      <TextField
        label="Spell DC"
        onChange={(e) => handleChange(`${identifier}.dc`, e.target.value)}
        value={spell.dc}
      ></TextField>
    </EditDialog>
  );
};

export default EditSpell;
