import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Skill = (props) => {
  const { abilityMod, classSkill, index, edit, name, ranks, setSkill } = props;

  const handleAdd = () => {
    setSkill(index, ranks + 1);
  };

  const handleSubtract = () => {
    if (ranks > 0) {
      setSkill(index, ranks - 1);
    }
  };

  let sum = ranks;

  if (classSkill) {
    sum += 3;
  }
  if (ranks > 0) {
    sum += abilityMod;
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{name}</div>
        <div style={{ display: "flex" }}>
          {edit ? (
            <IconButton onClick={handleSubtract} size="small">
              <RemoveIcon />
            </IconButton>
          ) : null}
          <div>{sum}</div>
          {edit ? (
            <IconButton onClick={handleAdd} size="small">
              <AddIcon />
            </IconButton>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Skill;
