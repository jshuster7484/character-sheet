import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import AddItem from "./AddItem";
import Item from "./Item";

import { Field, Form, Formik } from "formik";

import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";

const modifierTargets = [
  { label: "Armor Class", value: "ac" },
  { label: "Strength", value: "str" },
  { label: "Dexterity", value: "dex" },
  { label: "Constitution", value: "con" },
  { label: "Intelligence", value: "int" },
  { label: "Wisdom", value: "wis" },
  { label: "Charisma", value: "chr" },
];

const itemTypes = [
  { label: "Armor", value: "armor" },
  { label: "Melee Weapon", value: "melee" },
  { label: "Ranged Weapon", value: "ranged" },
  { label: "Misc.", value: "misc" },
];

const initialInventory = [
  {
    name: "Leather Armor",
    quantity: 1,
    modifiers: [],
    equipped: true,
    type: "armor",
  },
  {
    name: "Torch",
    quantity: 10,
    modifiers: [],
    equipped: false,
    type: "misc",
  },
];

localStorage.setItem("inventory", JSON.stringify(initialInventory));

const getInventory = () => {
  return JSON.parse(localStorage.getItem("inventory"));
};

export default function Inventory() {
  const [inventory, setInventory] = useState(getInventory());
  const [open, setOpen] = useState(false);

  const onAdd = name => {
    const newInventory = inventory.concat([{ name }]);
    setInventory(newInventory);
  };

  const onDelete = name => {
    const filteredInventory = inventory.filter(item => {
      return item.name !== name;
    });
    setInventory(filteredInventory);
  };

  let initialValues = {};

  const addItem = item => {
    const newInventory = inventory.concat([item]);
    setInventory(newInventory);
  };

  return (
    <section className="inventory">
      <h1>Inventory</h1>
      <AddItem onAdd={onAdd} />
      <div style={{ display: "flex" }}>
        {inventory.map(item => (
          <Item key={item.name} onDelete={onDelete} {...item} />
        ))}
      </div>
      <div>
        <Button
          color="primary"
          onClick={() => {
            initialValues = {};
            setOpen(true);
          }}
          variant="contained"
        >
          Add Item
        </Button>
      </div>
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
        fullWidth
        maxWidth="xs"
      >
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            setOpen(false);
            addItem(values);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <DialogTitle>Item</DialogTitle>
              <DialogContent>
                <Field
                  as={TextField}
                  type="string"
                  name="name"
                  autoFocus
                  label="Name"
                  fullWidth
                />
                <Field
                  as={TextField}
                  type="string"
                  name="type"
                  label="Type"
                  fullWidth
                  select
                >
                  {itemTypes.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                {values.type === "armor" ? (
                  <Field
                    as={TextField}
                    type="number"
                    name="acBonus"
                    label="AC Bonus"
                    fullWidth
                  />
                ) : null}
                <Typography>Modifiers</Typography>
                <Field
                  as={TextField}
                  type="string"
                  name="target"
                  label="Target"
                  fullWidth
                  select
                >
                  {modifierTargets.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Field>
                <Field
                  as={TextField}
                  type="number"
                  name="bonus"
                  label="Bonus"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                {/* {item ? (
                  <Button
                    color="secondary"
                    onClick={() => deleteItem(item)}
                    variant="contained"
                  >
                    Delete
                  </Button>
                ) : null} */}
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  type="submit"
                  variant="contained"
                >
                  Add
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </section>
  );
}
