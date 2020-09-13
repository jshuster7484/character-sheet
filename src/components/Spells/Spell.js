import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
} from "@material-ui/core";
import EditSpell from "./EditSpell";
import EditCustomSpell from "./EditCustomSpell";

const Spell = ({ index, spell, handleChange }) => {
  const context = useContext(AppContext);
  const { state } = context;
  const { characters, activeCharacterIndex } = state;

  const identifier = `spells[${spell.slalevel}].known[${index}]`;

  const handleCast = () => {
    console.log(`${spell.name} cast!`);
    // handleChange(spellSlotIdentifier, spent + 1);
  };

  const handleOpen = () => {
    handleChange(`${identifier}.edit`, true);
  };

  const handleClose = () => {
    handleChange(`${identifier}.edit`, false);
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
          open={spell.edit}
          onClose={handleClose}
          handleChange={handleChange}
          identifier={identifier}
          index={index}
          spell={spell}
        />
      ) : (
        <EditSpell
          open={spell.edit}
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
