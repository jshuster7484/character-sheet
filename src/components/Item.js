import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Card from "@material-ui/core/Card";
import ItemForm from "./ItemForm";

export default function Item({ onAdd, onDelete, item, effects }) {
  const context = useContext(AppContext);
  const { dispatch } = context;
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    onDelete(item.name, item);
  };

  const handleClose = () => {
    dispatch({ type: "delete_item", payload: { key: item.name, value: item } });
    dispatch({ type: "add_item", payload: { key: item.name, value: item } });
    dispatch({ type: "save_data" });
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Card className="stat" variant="outlined" onClick={handleOpen}>
        <span>{item.name}</span>
      </Card>
      <ItemForm
        initialValues={item}
        handleClose={handleClose}
        open={open}
        onAdd={onAdd}
        onDelete={handleDelete}
        effects={effects}
        title={item.name}
      />
    </div>
  );
}
