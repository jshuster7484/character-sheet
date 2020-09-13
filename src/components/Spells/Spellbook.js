import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import Button from "@material-ui/core/Button";
import Spell from "./Spell";
import SpellSlots from "./SpellSlots";
import Fantasy from "../../assets/icons8-fantasy-50.png";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  TextField,
} from "@material-ui/core";
import spellData from "../../data/spells.json";

const Spellbook = ({ handleChange }) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { powers, spells } = characters[activeCharacterIndex];
  const [open, setOpen] = useState(false);
  const [spellName, setSpellName] = useState("");

  const customSpell = {
    name: "New Spell",
    edit: false,
    custom: true,
    power: false,
    school: "",
    subschool: "",
    slalevel: 0,
    castingtime: "",
    range: "",
    duration: "",
    area: "",
    savingthrow: "",
    spellresistance: "",
    description: "",
    max: 0,
    spent: 0,
  };

  const addCustomSpell = () => {
    addSpell(customSpell);
  };

  const addSpell = (spell) => {
    dispatch({
      type: "add_item",
      payload: {
        key: `characters[${activeCharacterIndex}].spells[${spell.slalevel}].known`,
        value: { ...spell, dc: null, toHit: null, ability: null },
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
      {powers.length > 0 && (
        <>
          <h3 style={{ fontFamily: "Times New Roman" }}>POWERS</h3>
          <div style={{ display: "flex" }}>
            {powers.map((spell, index) => (
              <Spell index={index} handleChange={handleChange} spell={spell} />
            ))}
          </div>
        </>
      )}
      {spells[0].known.length > 0 && (
        <>
          <h3 style={{ fontFamily: "Times New Roman" }}>CANTRIPS</h3>
          <div style={{ display: "flex" }}>
            {spells[0].known.map((spell, index) => (
              <Spell index={index} handleChange={handleChange} spell={spell} />
            ))}
          </div>
        </>
      )}
      {spells[1].known.length > 0 && (
        <>
          <div style={{ alignItems: "center", display: "flex" }}>
            <h2 style={{ fontFamily: "Times New Roman" }}>I</h2>
            {/* <SpellSlots level={1} /> */}
          </div>
          <div style={{ display: "flex" }}>
            {spells[1].known.map((spell, index) => (
              <Spell index={index} handleChange={handleChange} spell={spell} />
            ))}
          </div>
        </>
      )}
      <div style={{ marginTop: "1rem" }}>
        <Button
          onClick={handleOpen}
          variant="contained"
          style={{ marginRight: "1rem" }}
        >
          Add Spell
        </Button>
        <Button
          onClick={addCustomSpell}
          variant="contained"
          style={{ marginRight: "1rem" }}
        >
          Add Custom Spell
        </Button>
      </div>
      <Dialog fullWidth onClose={handleClose} maxWidth="lg" open={open}>
        <DialogTitle>Find a Spell</DialogTitle>
        <DialogContent style={{ height: "50vh" }}>
          <div style={{ marginBottom: "1rem" }}>
            <TextField
              autoFocus
              label="Spell Name"
              onChange={(e) => setSpellName(e.target.value)}
              style={{ marginRight: "1rem" }}
              value={spellName}
            />
            <TextField label="Spell School" />
          </div>

          {spellName && spellName.length > 2 ? (
            <TableContainer component={Paper}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>School</TableCell>
                    <TableCell>Spell Class</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {spellData
                    .filter((spell) =>
                      spell.name
                        .toLowerCase()
                        .includes(spellName.toLowerCase()),
                    )
                    .map((foundSpell) => (
                      <TableRow>
                        <TableCell>{foundSpell.name}</TableCell>
                        <TableCell>{foundSpell.shortdescription}</TableCell>
                        <TableCell>{foundSpell.school}</TableCell>
                        <TableCell>{foundSpell.spelllevel}</TableCell>
                        <TableCell>
                          <Button
                            onClick={() => {
                              addSpell(foundSpell);
                              setOpen(false);
                              setSpellName("");
                            }}
                          >
                            Add Spell
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <span>Please enter a spell.</span>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Spellbook;
