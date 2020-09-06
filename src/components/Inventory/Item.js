import React from "react";
import { Card, CardActionArea, CardContent, Dialog } from "@material-ui/core";
import EditItem from "./EditItem";

export default function Item({ handleChange, item, index }) {
  const identifier = `items[${index}]`;

  const handleOpen = () => {
    handleChange(`${identifier}.edit`, true);
  };

  const handleClose = () => {
    handleChange(`${identifier}.edit`, false);
  };

  return (
    <div>
      <Card style={{ margin: "0.5rem" }}>
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <span>{item.name}</span>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog fullWidth onClose={handleClose} open={item.edit} maxWidth="lg">
        <EditItem
          identifier={identifier}
          item={item}
          index={index}
          handleChange={handleChange}
        />
      </Dialog>
    </div>
  );
}
