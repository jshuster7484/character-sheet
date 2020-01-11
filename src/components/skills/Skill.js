import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { getStringNumber } from "../../utils";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Skill(props) {
  const classes = useStyles();
  const { name, modifiers, value } = props;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const hasModifier = () => {
    const { modifiers } = props;
    return modifiers.length > 0;
  };

  const expandButton = () => {
    return open ? <ExpandLessIcon /> : <ExpandMoreIcon />;
  };

  return (
    <>
      <ListItem button onClick={hasModifier() ? handleClick : null}>
        <ListItemText primary={name} />
        <Tooltip position="right" title="+6 Dexterity +3 Class Skill + 4 Ranks">
          <Typography>{value}</Typography>
        </Tooltip>
        {hasModifier() ? expandButton() : null}
      </ListItem>
      {hasModifier() ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <ul className={classes.nested}>
            {modifiers.map(modifier => (
              <li key={modifier.description}>
                {modifier.description} {getStringNumber(modifier.value)}
              </li>
            ))}
          </ul>
        </Collapse>
      ) : null}
    </>
  );
}
