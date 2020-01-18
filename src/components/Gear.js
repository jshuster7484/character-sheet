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
import { Formik, Form, Field } from "formik";

const itemTypes = ["Armor", "Melee Weapon", "Ranged Weapon", "Misc."];

export default function Gear(props) {
  const [open, setOpen] = React.useState(false);
  const { gear } = props;
  console.log("GEAR", gear);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
  };

  const handleSubmit = values => {
    console.log("submitted", values);
    setOpen(false);

    const newItem = {
      name: values.name,
      type: values.type,
    };

    const data = JSON.parse(localStorage.getItem("data"));
    console.log("data", data);
    console.log("data.gear", data.gear);
    data.gear.push(newItem);
    localStorage.setItem("data", JSON.stringify(data));
    props.forceUpdate();
  };

  return (
    <div className="gear">
      <Card variant="outlined">
        <CardHeader title="Inventory" />
        <CardContent style={{ display: "flex" }}>
          {gear.map(item => (
            <Card className="stat" key={item.name} variant="outlined">
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
        <Formik
          initialValues={{ name: "", type: "" }}
          onSubmit={values => handleSubmit(values)}
        >
          {({ isSubmitting }) => (
            <Form>
              <DialogTitle>Add item</DialogTitle>
              <DialogContent>
                <Field type="string" name="name" />
                <Field type="string" name="type" />
              </DialogContent>
              <DialogActions>
                <Button color="primary" disabled={isSubmitting} type="submit">
                  Add
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
      {/* <TextField autoFocus label="Name" fullWidth name="name" />
          <TextField label="Type" fullWidth name="type" select>
            {itemTypes.map(option => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField> */}
    </div>
  );
}
