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
import { Formik, Field, Form } from "formik";

const itemTypes = ["Armor", "Consumable", "Tool", "Weapon"];

const modTargets = [
  "Strength",
  "Dexterity",
  "Constitution",
  "Intelligence",
  "Wisdom",
  "Charisma",
];

export default function AddItem({ onAdd }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add New Item</Button>
      <Dialog fullWidth open={open} onClose={handleClose} size="xs">
        <DialogTitle>New Item</DialogTitle>
        <Formik
          initialValues={{
            name: "",
            type: "",
            // modName: "",
            // modValue: "",
          }}
          onSubmit={values => {
            console.log("attempting submit");
            setOpen(false);
            onAdd({ ...values, key: values.name });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogContent>
                <Field as={TextField} fullWidth name="name" label="Name" />
                <Field
                  as={TextField}
                  fullWidth
                  name="type"
                  label="Item Type"
                  select
                >
                  {itemTypes.map(type => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Field>
              </DialogContent>
              <DialogActions>
                <Button type="submit">Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
}
