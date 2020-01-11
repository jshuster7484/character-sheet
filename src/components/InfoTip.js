import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { getStringNumber } from "../utils";

const useStyles = makeStyles(theme => ({
  tooltip: {
    maxWidth: "500px",
  },
}));

export default function InfoTip(props) {
  const classes = useStyles();
  const { modifiers, children } = props;

  const sum = modifiers
    .map(modifier => modifier.value)
    .reduce((prev, next) => prev + next);

  const title = (
    <div style={{ display: "flex" }}>
      {modifiers.map((modifier, index) => (
        <>
          <div key={modifier.name} style={{ marginRight: "0.5rem" }}>
            <div style={{ textAlign: "center", whiteSpace: "nowrap" }}>
              {modifier.name}
            </div>
            <div style={{ textAlign: "center" }}>
              {getStringNumber(modifier.value)}
            </div>
          </div>
          {index + 1 !== modifiers.length && (
            <div
              key={`plus${index}`}
              style={{
                margin: "0 1rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              +
            </div>
          )}
        </>
      ))}
      <div
        key="equals"
        style={{
          margin: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        =
      </div>
      <div
        key="sum"
        style={{
          margin: "0 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {sum}
      </div>
    </div>
  );
  return (
    <Tooltip
      classes={{ tooltip: classes.tooltip }}
      title={title}
      children={children}
    />
  );
}
