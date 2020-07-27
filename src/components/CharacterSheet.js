import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Abilities from "./Abilities";
import Character from "./Character";
import Weapons from "./Weapons/Weapons";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const CharacterSheet = () => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { activeCharacterIndex, characters } = state;
  const { name } = characters[activeCharacterIndex];
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = (path, value) => {
    dispatch({
      type: "on_input",
      payload: {
        key: `characters[${activeCharacterIndex}].${path}`,
        value,
      },
    });
    dispatch({ type: "save_data" });
  };

  const handleDelete = () => {
    handleClose();
    dispatch({
      type: "on_input",
      payload: {
        key: "activeCharacterIndex",
        value: 0,
      },
    });
    dispatch({
      type: "delete_item",
      payload: {
        key: "characters",
        value: activeCharacterIndex,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <main
      style={{ display: "flex", flexDirection: "column", marginTop: "4rem" }}
    >
      <Character handleChange={handleChange} />
      <Abilities />
      <Weapons handleChange={handleChange} />
      <Button onClick={handleOpen} style={{ marginLeft: "auto" }}>
        Delete Character
      </Button>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
        <DialogContent>Are you sure you want to delete {name}?</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button color="secondary" onClick={handleDelete} variant="contained">
            Delete {name}
          </Button>
        </DialogActions>
      </Dialog>
    </main>
  );
};

export default CharacterSheet;
