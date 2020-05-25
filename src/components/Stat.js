import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { hasModifier } from "../utils";

const Stat = (props) => {
  const { label, value, modifiers } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
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
          <div style={{ padding: "1rem" }}>
            {hasModifier(modifiers) ? (
              <>
                {modifiers.map((mod) => (
                  <div
                    key={mod.source}
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography>{mod.label}</Typography>
                    <Typography style={{ marginLeft: "1rem" }}>
                      {mod.value}
                    </Typography>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        </Popover>
      ) : null}
    </>
  );
};

export default Stat;
