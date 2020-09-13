import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const SpellSlot = () => (
  <div
    style={{
      border: "2px solid black",
      backgroundColor: "black",
      borderRadius: "2px",
      height: "0.5rem",
      width: "0.5rem",
      margin: "0.25rem",
    }}
  ></div>
);

const SpentSpellSlot = () => (
  <div
    style={{
      border: "2px solid black",
      borderRadius: "2px",
      height: "0.5rem",
      width: "0.5rem",
      margin: "0.25rem",
    }}
  ></div>
);

const SpellSlots = ({ level }) => {
  const context = useContext(AppContext);
  const { state } = context;
  const { activeCharacterIndex, characters } = state;

  const number = 0;
  const spent = 0;

  const filledSlots = Math.max(number - spent, 0);
  const spentSlots = Math.min(spent, number);

  return (
    <div
      style={{
        alignItems: "baseline",
        display: "flex",
        marginLeft: "1rem",
      }}
    >
      {[...Array(filledSlots)].map((slot) => (
        <SpellSlot />
      ))}
      {[...Array(spentSlots)].map((spent) => (
        <SpentSpellSlot />
      ))}
    </div>
  );
};

export default SpellSlots;
