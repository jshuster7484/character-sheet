import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import { Button, Dialog } from "@material-ui/core";
import EditItem from "./EditItem";
import Item from "./Item";
import Rucksack from "../../assets/icons8-rucksack-50.png";

export default function Inventory({ handleChange }) {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { items } = characters[activeCharacterIndex];

  const newItem = {
    edit: false,
    name: "New Item",
    type: "",
    quantity: null,
    notes: "",
  };

  const addItem = () => {
    dispatch({
      type: "add_item",
      payload: {
        key: `characters[${activeCharacterIndex}].items`,
        value: newItem,
      },
    });
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
        {items.map((item, index) => (
          <Item
            key={index}
            handleChange={handleChange}
            index={index}
            item={item}
          />
        ))}
      </div>
      <Button
        onClick={addItem}
        style={{ marginTop: "1rem" }}
        variant="contained"
      >
        Add Item
      </Button>
      {/* Open a Dialog to edit the new item here */}
      {/* <Dialog onClose={handleClose} open={open}>
        <EditItem
          item={newItem}
          handleChange={handleChange}
          index={items.length + 1}
        />
      </Dialog> */}
    </section>
  );
}
