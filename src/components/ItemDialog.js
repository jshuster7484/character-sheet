import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import { Field, Form, Formik } from "formik";

export default function ItemDialog(props) {
  const [open, setOpen] = React.useState(false);
  const { item, deleteItem } = props;
  let initialValues = { name: "", type: "" };

  if (item) {
    initialValues = {
      name: item.name,
      type: item.type,
    };
  }

  const handleClose = value => {
    setOpen(false);
  };

  const handleSubmit = values => {
    setOpen(false);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth
      maxWidth="xs"
    >
      <Formik
        initialValues={initialValues}
        onSubmit={values => handleSubmit(values)}
      >
        {({ isSubmitting }) => (
          <Form>
            <DialogTitle>{item ? "Edit item" : "Add item"}</DialogTitle>
            <DialogContent>
              <Field
                as={TextField}
                type="string"
                name="name"
                autoFocus
                label="Name"
                fullWidth
              />
              <Field
                as={TextField}
                type="string"
                name="type"
                label="Type"
                fullWidth
              />
              <h1>Modifiers</h1>
              <Field
                as={TextField}
                type="numeric"
                name="mod1"
                label="Modifier Value"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              {item ? (
                <Button
                  color="secondary"
                  onClick={() => deleteItem(item)}
                  variant="contained"
                >
                  Delete
                </Button>
              ) : null}
              <Button
                color="primary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                {item ? "Save" : "Add"}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}
