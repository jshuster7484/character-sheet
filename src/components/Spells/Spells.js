import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import Button from "@material-ui/core/Button";
import Spell from "./Spell";
import Fantasy from "../../assets/icons8-fantasy-50.png";
import { Dialog, TextField } from "@material-ui/core";
import spellData from "../../data/spells.json";

const Spells = ({ handleChange }) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { spells } = characters[activeCharacterIndex];
  const [open, setOpen] = useState(false);
  const [spellName, setSpellName] = useState("");

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section>
      <header style={{ alignItems: "center", display: "flex" }}>
        <img
          src={Fantasy}
          style={{ height: "32px", marginRight: "1rem", width: "32px" }}
        />
        <h2>Spellbook</h2>
      </header>
      {spells.map((spell, index) => (
        <Spell index={index} handleChange={handleChange} spell={spell} />
      ))}
      <div>
        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ marginRight: "1rem" }}
        >
          Find Spell
        </Button>
        <Button variant="contained">Add Custom Spell</Button>
      </div>
      <Dialog fullWidth onClose={handleClose} maxWidth="lg" open={open}>
        <TextField
          label="Spell Name"
          onChange={(e) => setSpellName(e.target.value)}
          value={spellName}
        />
        {spellName ? (
          <div>
            {spellData
              .filter((spell) => spell.name.includes(spellName))
              .map((foundSpell) => (
                <p>
                  <strong>{foundSpell.name} </strong>
                  <em>{foundSpell.shortdescription}</em>
                </p>
              ))}
          </div>
        ) : (
          <span>Please enter a spell.</span>
        )}
      </Dialog>
    </section>
  );
};

export default Spells;
