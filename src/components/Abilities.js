import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Ability from "./Ability";

const Abilities = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { abilities, edit } = state;

  const onChange = (key, value) => {
    dispatch({ type: "set_ability_score", payload: { key, value } });
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
      <h1>Ability Scores</h1>
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
