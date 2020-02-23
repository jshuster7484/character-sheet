import React from "react";
import Card from "@material-ui/core/Card";

export default function Item({ onDelete, name }) {
  const deleteItem = () => {
    onDelete(name);
  };

  return (
    <Card className="stat" variant="outlined">
      <span>{name}</span>
      <button onClick={deleteItem}>Delete</button>
    </Card>
  );
}
