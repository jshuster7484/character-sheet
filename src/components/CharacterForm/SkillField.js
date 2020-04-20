import React from "react";
import { Field } from "formik";
import { TextField } from "@material-ui/core";
import Stat from "../Stat";

const SkillField = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <Stat label={props.name} value={props.ranks} />
      <Field
        as={TextField}
        name={props.name}
        type="number"
        fullWidth
        label={props.name}
      />
    </div>
  );
};

export default SkillField;
