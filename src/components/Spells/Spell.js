import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import {
  Button,
  Dialog,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from "@material-ui/core";
import EditSpell from "./EditSpell";
import EditCustomSpell from "./EditCustomSpell";
import EditDialog from "../shared/EditDialog";

const Spell = ({ index, spell, handleChange }) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { characters, activeCharacterIndex } = state;
  const { slots } = characters[activeCharacterIndex];
  const [open, setOpen] = useState(false);

  const identifier = `spells[${spell.slalevel}].known[${index}]`;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCast = () => {
    // handleChange(spellSlotIdentifier, spent + 1);
  };

  return (
    <>
      <Card
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          margin: "0.5rem",
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardContent>
            <strong>{spell.name}</strong>
            {spell.dc && (
              <strong style={{ margin: "1rem" }}>DC: {spell.dc}</strong>
            )}
          </CardContent>
        </CardActionArea>
        {spell.slalevel !== 0 && (
          <CardActions>
            <Button onClick={handleCast} size="small">
              Cast
            </Button>
          </CardActions>
        )}
      </Card>
      {spell.custom ? (
        <EditCustomSpell
          open={open}
          onClose={handleClose}
          handleChange={handleChange}
          identifier={identifier}
          index={index}
          spell={spell}
        />
      ) : (
        <EditSpell
          open={open}
          onClose={handleClose}
          handleChange={handleChange}
          identifier={identifier}
          index={index}
          spell={spell}
        />
      )}
    </>
  );
};

export default Spell;
