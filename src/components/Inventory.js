import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Button from "@material-ui/core/Button";
import ItemForm from "./ItemForm";
import Item from "./Item";
import Rucksack from "../assets/icons8-rucksack-50.png";

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
  const { activeCharacterIndex, characters } = state;
  const { items } = characters[activeCharacterIndex];
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
      <header style={{ alignItems: "center", display: "flex" }}>
        <img
          src={Rucksack}
          style={{ height: "32px", marginRight: "1rem", width: "32px" }}
        />
        <h2>Inventory</h2>
      </header>
      <div style={{ display: "flex" }}>
        {items.sort().map((item) => (
          <Item
            key={item.name}
            onDelete={onDelete}
            onAdd={onAdd}
            item={item}
            effects={item.effects}
          />
        ))}
      </div>
      <Button onClick={handleOpen} variant="contained">
        Add Item
      </Button>
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
