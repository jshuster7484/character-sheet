import React from "react";
import Card from "@material-ui/core/Card";
import ItemForm from "./ItemForm";

export default function Item({ onAdd, onDelete, item, modifiers }) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    onDelete(item.name, item);
  };

  const handleClose = () => {
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
        modifiers={modifiers}
        title={item.name}
      />
    </div>
  );
}
