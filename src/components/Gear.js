import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { useData } from "../App";

const itemTypes = ["Armor", "Melee Weapon", "Ranged Weapon", "Misc."];

export default function Gear() {
  const [data] = useData();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  return (
    <div className="gear">
      <Card variant="outlined">
        <CardHeader title="Inventory" />
        <CardContent style={{ display: "flex" }}>
          {data.gear.map(item => (
            <Card className="stat" variant="outlined">
              <Typography align="center" variant="body1">
                {item.name}
              </Typography>
            </Card>
          ))}
        </CardContent>
        <CardActions>
          <Button color="primary" onClick={handleClickOpen} variant="contained">
            Add Item
          </Button>
        </CardActions>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle>Add item</DialogTitle>
        <DialogContent>
          <TextField autoFocus label="Name" fullWidth />
          <TextField label="Type" fullWidth select>
            {itemTypes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
