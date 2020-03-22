import React from "react";
import Card from "@material-ui/core/Card";
import ItemForm from "./ItemForm";

export default function Item({ onAdd, onDelete, item }) {
  const [open, setOpen] = React.useState(false);

  const handleDelete = () => {
    onDelete(item.name);
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
        title={item.name}
      />
    </div>
  );
}
