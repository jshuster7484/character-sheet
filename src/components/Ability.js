import React from "react";
import Popover from "@material-ui/core/Popover";
import { getDisplayAbilityModifier } from "../utils";
import Typography from "@material-ui/core/Typography";
import { getStringNumber } from "../utils";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

export default function Ability(props) {
  const { base, edit, effects, name, modifier, setAbilityScore } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (!edit) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleAdd = () => {
    setAbilityScore(base + 1);
  };

  const handleSubtract = () => {
    if (base > 0) {
      setAbilityScore(base - 1);
    }
  };

  return (
    <>
      {edit ? (
        <div
          className="stat"
          onClick={handleClick}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <header style={{ textAlign: "center", textTransform: "capitalize" }}>
            {name}
          </header>
          <div style={{ display: "flex" }}>
            <IconButton onClick={handleSubtract} size="small">
              <RemoveIcon />
            </IconButton>
            <div style={{ fontWeight: "bold", textAlign: "center" }}>
              {base}
            </div>
            <IconButton onClick={handleAdd} size="small">
              <AddIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        <>
          <div className="stat" onClick={handleClick}>
            <div>
              <header
                style={{ textAlign: "center", textTransform: "capitalize" }}
              >
                {name}
              </header>
              <div style={{ fontWeight: "bold", textAlign: "center" }}>
                {edit ? base : getDisplayAbilityModifier(modifier)}
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
            disableRestoreFocus
          >
            <div style={{ padding: "1rem" }}>
              <div
                key="base"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography>Base</Typography>
                <Typography style={{ marginLeft: "1rem" }}>{base}</Typography>
              </div>
              {effects.length > 0 ? (
                <>
                  {effects.map((effect) => (
                    <div
                      key={effect.source}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{effect.source}</Typography>
                      <Typography style={{ marginLeft: "1rem" }}>
                        {getStringNumber(parseInt(effect.value))}
                      </Typography>
                    </div>
                  ))}
                </>
              ) : null}
            </div>
          </Popover>
        </>
      )}
    </>
  );
}
