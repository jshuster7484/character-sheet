import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";
import Item from "./Item";

const newItem = {
  name: "",
  type: "",
  armorBonus: "",
  maxDexBonus: "",
  spellFailure: "",
  effects: [],
};

export default function Inventory(props) {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { inventory } = state;
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const onAdd = (key, value) => {
    dispatch({ type: "add_item", payload: { key, value } });
    dispatch({ type: "save_data" });
  };

  // const onUpdate = (itemToUpdate, modifiersToUpdate) => {
  //   setInventory(
  //     inventory
  //       .filter((item) => item.name !== itemToUpdate.name)
  //       .concat([itemToUpdate]),
  //   );
  //   setModifiers(
  //     modifiers
  //       .filter((mod) => mod.source !== itemToUpdate.name)
  //       .concat(modifiersToUpdate),
  //   );
  // };

  const onDelete = (key, value) => {
    dispatch({ type: "delete_item", payload: { key, value } });
    dispatch({ type: "save_data" });
  };

  return (
    <section className="inventory">
      <h1>Inventory</h1>
      <div style={{ display: "flex" }}>
        {inventory.sort().map((item) => (
          <Item
            key={item.name}
            handleClose={handleClose}
            onDelete={onDelete}
            // onAdd={onUpdate}
            onAdd={onAdd}
            item={item}
            effects={item.effects}
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
        effects={[]}
        title="New Item"
      />
    </section>
  );
}
