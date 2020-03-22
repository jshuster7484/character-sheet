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
import { abilities } from "./CharacterForm";

const itemTypes = ["Armor", "Consumable", "Tool", "Weapon"];

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
            modTarget: "",
            modValue: "",
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
                <h2>Modifiers</h2>
                <Field
                  as={TextField}
                  fullWidth
                  name="modTarget"
                  label="Modifier Target"
                  select
                >
                  {abilities.map(ability => (
                    <MenuItem key={ability.name} value={ability.name}>
                      {ability.label}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  fullWidth
                  name="modValue"
                  label="Modifier Value"
                />
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
