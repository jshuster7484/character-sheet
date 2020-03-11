import React from "react";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@material-ui/core";

export default function Item({ onDelete, name }) {
  const [open, setOpen] = React.useState(false);
  const deleteItem = () => {
    onDelete(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const saveItem = () => {
    console.log("do a thing");
    setOpen(false);
  };

  return (
    <div>
      <Card className="stat" variant="outlined" onClick={handleOpen}>
        <span>{name}</span>
      </Card>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{name}</DialogTitle>
        <DialogContent>
          <span>Some item information here.</span>
        </DialogContent>
        <DialogActions>
          <Button onClick={deleteItem}>Delete</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
