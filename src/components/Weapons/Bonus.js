import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

const Bonus = ({ bonus, handleChange, identifier, index }) => {
  const context = useContext(AppContext);
  const { dispatch, state } = context;
  const { activeCharacterIndex } = state;

  const handleDelete = () => {
    dispatch({
      type: "delete_item",
      payload: {
        key: `characters[${activeCharacterIndex}].${identifier}`,
        value: index,
      },
    });
    dispatch({ type: "save_data" });
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <TextField
        label="Source"
        onChange={(e) =>
          handleChange(`${identifier}[${index}].source`, e.target.value)
        }
        value={bonus.source}
      />
      <TextField
        label="Value"
        onChange={(e) =>
          handleChange(
            `${identifier}[${index}].value`,
            parseInt(e.target.value),
          )
        }
        type="number"
        value={bonus.value}
      />
      <IconButton onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Bonus;
