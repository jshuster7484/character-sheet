import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";

export default function Character() {
  const [edit, setEdit] = useState(false);
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { name, baseAttackBonus } = state;

  const handleChange = (key, value) => {
    dispatch({
      type: "on_input",
      payload: {
        key,
        value,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <section className="character">
      <header style={{ alignItems: "center", display: "flex" }}>
        {!edit && <h1>{name}</h1>}
        {edit && (
          <TextField
            label="Name"
            onChange={(e) => handleChange("name", e.target.value)}
            style={{ fontWeight: "bold" }}
            value={name}
          />
        )}
        <IconButton onClick={() => setEdit(!edit)}>
          <EditIcon />
        </IconButton>
      </header>

      {edit && (
        <TextField
          label="Base Attack Bonus"
          onChange={(e) =>
            handleChange("baseAttackBonus", parseInt(e.target.value))
          }
          type="number"
          value={baseAttackBonus}
        />
      )}
    </section>
  );
}
