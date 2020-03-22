import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import ItemForm from "./ItemForm";
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

const newItem = {
  name: "",
  type: "",
  modTarget: "",
  modValue: "",
};

export default function Inventory(props) {
  const [open, setOpen] = useState(false);
  const { inventory, setInventory } = props;

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onAdd = toAdd => {
    if (!inventory.some(item => item.name === toAdd.name)) {
      const newInventory = inventory.concat([toAdd]);
      setInventory(newInventory);
    }
  };

  const onDelete = name => {
    const filteredInventory = inventory.filter(item => {
      return item.name !== name;
    });
    setInventory(filteredInventory);
  };

  return (
    <section className="inventory">
      <h1>Inventory</h1>
      <div style={{ display: "flex" }}>
        {inventory.map(item => (
          <Item
            key={item.name}
            handleClose={handleClose}
            onDelete={onDelete}
            onAdd={onAdd}
            item={item}
          />
        ))}
      </div>
      <Button onClick={handleOpen}>Add New Item</Button>
      <ItemForm
        initialValues={newItem}
        onAdd={onAdd}
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        title="New Item"
      />
    </section>
  );
}
