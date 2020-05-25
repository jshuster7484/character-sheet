import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Ability from "./Ability";

const Abilities = (props) => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { abilityScores, edit } = state;

  const onChange = (key, value) => {
    dispatch({ type: "on_input", payload: { key, value } });
    dispatch({ type: "save_data" });
  };

  const renderAbility = (key) => {
    return (
      <Ability
        edit={edit}
        name={key}
        base={abilityScores[key]}
        // modifiers={modifiers.filter((mod) => mod.target === key)}
        modifiers={[]}
        setAbilityScore={(value) => onChange(`abilityScores.${key}`, value)}
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
