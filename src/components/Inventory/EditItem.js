import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  TextField,
} from "@material-ui/core";

const itemTypes = ["Accessory", "Armor", "Consumable", "Tool", "Weapon"];

const EditItem = ({ identifier, index, handleChange, item }) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { activeCharacterIndex } = state;

  const deleteItem = () => {
    console.log(index);
    dispatch({
      type: "delete_item",
      payload: {
        key: `characters[${activeCharacterIndex}].items`,
        value: index,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <>
      <DialogTitle>{item.name}</DialogTitle>
      <DialogContent
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridGap: "1rem",
        }}
      >
        <div>
          <TextField
            autoFocus
            fullWidth
            name="name"
            label="Name"
            onChange={(e) => handleChange(`${identifier}.name`, e.target.value)}
            value={item.name}
          />
          <TextField
            fullWidth
            name="type"
            label="Item Type"
            select
            onChange={(e) => handleChange(`${identifier}.type`, e.target.value)}
            value={item.type}
          >
            {itemTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            name="quantity"
            label="Quantity"
            onChange={(e) =>
              handleChange(`${identifier}.quantity`, e.target.value)
            }
            type="number"
            value={item.quantity}
          />
        </div>
        <TextField
          fullWidth
          label="Notes"
          multiline
          name="notes"
          onChange={(e) => handleChange(`${identifier}.notes`, e.target.value)}
          rows={10}
          value={item.notes}
          variant="outlined"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={deleteItem}>Delete</Button>
      </DialogActions>
    </>
  );
};

export default EditItem;
