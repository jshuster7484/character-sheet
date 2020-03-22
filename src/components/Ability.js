import React from "react";
import Popover from "@material-ui/core/Popover";
import { getAbilityModifier } from "../utils";
import Stat from "./Stat";
import { hasModifier } from "../utils";
import Typography from "@material-ui/core/Typography";
import { getStringNumber } from "../utils";

export default function Ability(props) {
  const { name, modifiers, base } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const total = modifiers
    ? parseInt(base) +
      modifiers.reduce(function(prev, item) {
        return prev + parseInt(item.modValue);
      }, 0)
    : parseInt(base);

  return (
    <>
      <div className="stat" onClick={handleClick}>
        <div>
          <header style={{ textAlign: "center" }}>{name}</header>
          <div style={{ fontWeight: "bold", textAlign: "center" }}>
            {getAbilityModifier(total)}
          </div>
        </div>
      </div>
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
          <div
            key="base"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>Base</Typography>
            <Typography style={{ marginLeft: "1rem" }}>{base}</Typography>
          </div>
          {hasModifier(modifiers) ? (
            <>
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
            </>
          ) : null}
        </div>
      </Popover>
    </>
  );
}
