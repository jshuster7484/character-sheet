import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
const EditStat = (props) => {
  const { onAdd, onSubtract, label, value } = props;

  return (
    <div className="stat" style={{ justifyContent: "space-between" }}>
      <IconButton onClick={onSubtract} size="small">
        <RemoveIcon />
      </IconButton>
      <div>
        <header style={{ textAlign: "center" }}>{label}</header>
        <div style={{ fontWeight: "bold", textAlign: "center" }}>{value}</div>
      </div>
      <IconButton onClick={onAdd} size="small">
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default EditStat;
