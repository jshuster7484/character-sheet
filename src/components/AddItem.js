import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  TextField,
} from "@material-ui/core";

const itemTypes = ["Armor", "Consumable", "Tool", "Weapon"];

export default function AddItem({ onAdd }) {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmit = event => {
    event.preventDefault();
    setOpen(false);
    onAdd(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <form onSubmit={onSubmit}>
      <Button onClick={handleOpen}>Add New Item</Button>
      <Dialog fullWidth open={open} onClose={handleClose} size="xs">
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            label="Name"
            onChange={event => setName(event.target.value)}
          />
          <TextField fullWidth label="Item Type" select>
            {itemTypes.map(type => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </form>
  );
}
