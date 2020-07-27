import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Ability from "./Ability";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";

const Abilities = (props) => {
  const [edit, setEdit] = useState(false);
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { activeCharacterIndex, characters } = state;
  const { abilities } = characters[activeCharacterIndex];

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const onChange = (path, value) => {
    dispatch({
      type: "set_ability_score",
      payload: { key: `characters[${activeCharacterIndex}].${path}`, value },
    });
    dispatch({ type: "save_data" });
  };

  const renderAbility = (key) => {
    return (
      <Ability
        edit={edit}
        effects={abilities[key].effects}
        name={key}
        base={abilities[key].score}
        modifier={abilities[key].modifier}
        setAbilityScore={(value) => onChange(`abilities.${key}`, value)}
      />
    );
  };

  return (
    <section>
      <header
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1>Ability Scores</h1>
        <IconButton onClick={toggleEdit}>
          <EditIcon />
        </IconButton>
      </header>
      <div style={{ display: "flex" }}>
        {renderAbility("strength")}
        {renderAbility("dexterity")}
        {renderAbility("constitution")}
        {renderAbility("intelligence")}
        {renderAbility("wisdom")}
        {renderAbility("charisma")}
      </div>
    </section>
  );
};

export default Abilities;
