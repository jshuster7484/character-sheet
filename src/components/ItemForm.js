import React, { useState } from "react";
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
import * as abilities from "../data/abilities";

const itemTypes = ["Accessory", "Armor", "Consumable", "Tool", "Weapon"];

export default function AddItem({
  onAdd,
  onDelete,
  handleClose,
  open,
  initialValues,
  modifiers,
  title,
}) {
  const itemModifiers = modifiers.filter((mod) => mod.source === title);
  initialValues.modifiers = itemModifiers;

  const armorFields = () => {
    return (
      <>
        <Field
          as={TextField}
          fullWidth
          label="Armor Bonus"
          name="armorBonus"
          type="number"
        />
        <Field
          as={TextField}
          fullWidth
          label="Maximum Dexterity Bonus"
          name="maxDexBonus"
          type="number"
        />
        <Field
          as={TextField}
          fullWidth
          label="Arcane Spell Failure Chance"
          name="spellFailure"
          type="number"
        />
      </>
    );
  };

  return (
    <div>
      <Dialog fullWidth open={open} onClose={handleClose} size="xs">
        <DialogTitle>{title}</DialogTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleClose();
            onAdd({ ...values }, values.modifiers);
          }}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <DialogContent>
                <Field as={TextField} fullWidth name="name" label="Name" />
                <Field
                  as={TextField}
                  fullWidth
                  name="type"
                  label="Item Type"
                  select
                >
                  {itemTypes.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Field>
                {values.type === "Armor" ? armorFields() : null}
                <Typography style={{ marginTop: "32px" }} variant="h6">
                  Modifiers
                </Typography>
                <FieldArray
                  name="modifiers"
                  render={({ insert, remove, push }) => (
                    <div>
                      {values.modifiers.length > 0 &&
                        values.modifiers.map((mod, index) => (
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
                              name={`modifiers.${index}.target`}
                              label="Modifier Target"
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
                              label="Modifier Value"
                              name={`modifiers.${index}.value`}
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
                        Add Modifier
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
}
