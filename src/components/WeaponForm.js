import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  TextField,
  Typography,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik, Field, FieldArray, Form } from "formik";

const WeaponForm = () => {
  return (
    <div>
      <Dialog fullWidth open={open} onClose={handleClose} size="xs">
        <DialogTitle>{title}</DialogTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleClose();
            onAdd(`inventory.${values.name}`, { ...values });
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <DialogContent>
                <Field
                  as={TextField}
                  autoFocus
                  fullWidth
                  name="name"
                  label="Name"
                />
                <Typography style={{ marginTop: "32px" }} variant="h6">
                  Effects
                </Typography>
                <FieldArray
                  name="effects"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.effects.length > 0 &&
                        values.effects.map((mod, index) => (
                          <div
                            style={{
                              alignItems: "baseline",
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            key={index}
                          >
                            <Field
                              as={TextField}
                              name={`effects.${index}.target`}
                              label="Effect Target"
                              select
                              style={{ width: "33%" }}
                            >
                              {Object.values(abilities).map((ability) => (
                                <MenuItem key={ability.key} value={ability.key}>
                                  {ability.label}
                                </MenuItem>
                              ))}
                            </Field>
                            <Field
                              as={TextField}
                              label="Effect Value"
                              name={`effects.${index}.value`}
                              type="number"
                            />
                            <IconButton
                              type="button"
                              className="secondary"
                              onClick={() => remove(index)}
                            >
                              <CloseIcon />
                            </IconButton>
                          </div>
                        ))}
                      <Button
                        type="button"
                        className="secondary"
                        onClick={() =>
                          push({
                            target: "",
                            value: "",
                            source: values.name,
                          })
                        }
                      >
                        Add Effect
                      </Button>
                    </div>
                  )}
                />
              </DialogContent>
              <DialogActions>
                {onDelete ? <Button onClick={onDelete}>Delete</Button> : null}

                <Button type="submit">Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default WeaponForm;
