import React from "react";
import Popover from "@material-ui/core/Popover";
import Sum from "./Sum";
import { hasModifier } from "../utils";

export default function Stat(props) {
  const { label, value, modifiers } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <div className="stat" onClick={handleClick}>
        <div>
          <header style={{ textAlign: "center" }}>{label}</header>
          <div style={{ fontWeight: "bold", textAlign: "center" }}>{value}</div>
        </div>
      </div>
      {hasModifier(modifiers) ? (
        <Popover
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Sum modifiers={modifiers} />
        </Popover>
      ) : null}
    </>
  );
}
