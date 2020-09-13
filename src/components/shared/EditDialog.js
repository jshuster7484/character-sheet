import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const EditDialog = ({ children, onClose, handleDelete, open, title }) => {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={onClose}
      style={{ margin: "1rem" }}
      maxWidth="lg"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions style={{ justifyContent: "flex-start" }}>
        <Button color="secondary" variant="contained" onClick={handleDelete}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditDialog;
