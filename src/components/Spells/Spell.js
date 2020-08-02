import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import Stat from "../Stat";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";

const Spell = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { characters, activeCharacterIndex } = state;
  const { abilities, baseAttackBonus } = characters[activeCharacterIndex];
  const { index, handleChange, spell } = props;

  const identifier = `spell[${index}]`;

  return (
    <div
      style={{
        border: "1px solid lightgray",
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
          {!spell.edit ? (
            <strong>{spell.name}</strong>
          ) : (
            <>
              <TextField
                label="Spell Name"
                onChange={(e) =>
                  handleChange(`${identifier}.name`, e.target.value)
                }
                style={{ fontWeight: "bold" }}
                value={spell.name}
              />
            </>
          )}
        </div>
        <IconButton
          onClick={(e) => handleChange(`${identifier}.edit`, !spell.edit)}
        >
          <EditIcon />
        </IconButton>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          marginTop: "1rem",
        }}
      ></div>
    </div>
  );
};

export default Spell;
