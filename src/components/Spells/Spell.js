import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  DialogActions,
  TextField,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Spell = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { characters, activeCharacterIndex } = state;
  const { abilities, baseAttackBonus } = characters[activeCharacterIndex];
  const { index, handleChange, spell } = props;

  const [open, setOpen] = useState(false);

  const identifier = `spells.level${spell.slalevel}[${index}]`;

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            <Button size="small">Cast</Button>
          </CardActions>
        )}
      </Card>
      <Dialog open={open} onClose={handleClose} style={{ margin: "1rem" }}>
        <DialogTitle>{spell.name}</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <span>School: {spell.school}</span>
          {spell.subschool && <span>Subschool: {spell.subschool}</span>}
          <strong>CASTING</strong>
          <span>Casting Time: {spell.castingtime}</span>
          <span>Components: {spell.components}</span>
          <strong>EFFECT</strong>
          <span>Range: {spell.range}</span>
          {spell.targets && <span>Target: {spell.targets}</span>}
          <span>Duration: {spell.duration}</span>
          <span>Saving Throw: {spell.savingthrow}</span>
          <span>Spell Resistance: {spell.spellresistance}</span>
          <p>{spell.description}</p>
          <TextField
            label="Spell DC"
            onChange={(e) => handleChange(`${identifier}.dc`, e.target.value)}
            value={spell.dc}
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Spell;
