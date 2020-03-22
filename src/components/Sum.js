import React from "react";
import Typography from "@material-ui/core/Typography";
import { getStringNumber } from "../utils";

export default function Sum(props) {
  const { modifiers } = props;
  return (
    <div style={{ padding: "1rem" }}>
      {modifiers.map(mod => (
        <div
          key={mod.name}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography>{mod.name}</Typography>
          <Typography style={{ marginLeft: "1rem" }}>
            {getStringNumber(parseInt(mod.modValue))}
          </Typography>
        </div>
      ))}
    </div>
  );
}
