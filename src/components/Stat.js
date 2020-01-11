import React from "react";
import Tooltip from "@material-ui/core/Tooltip";

export default function Stat(props) {
  const { label, value, tooltip } = props;
  return (
    <Tooltip title={tooltip ? tooltip : ""}>
      <div className="stat">
        <header style={{ textAlign: "center" }}>{label}</header>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>{value}</div>
      </div>
    </Tooltip>
  );
}
