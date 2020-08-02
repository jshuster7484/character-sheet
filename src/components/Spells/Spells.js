import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Button from "@material-ui/core/Button";
import Spell from "./Spell";

const Spells = ({ handleChange }) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { spells } = characters[activeCharacterIndex];

  const newSpell = {
    name: "New Spell",
    edit: false,
  };

  const addSpell = () => {
    dispatch({
      type: "add_item",
      payload: {
        key: `characters[${activeCharacterIndex}].spells`,
        value: newSpell,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <section>
      <h2>Spells</h2>
      {spells.map((spell, index) => (
        <Spell index={index} handleChange={handleChange} spell={spell} />
      ))}
      <Button onClick={addSpell}>Add Spell</Button>
    </section>
  );
};

export default Spells;
