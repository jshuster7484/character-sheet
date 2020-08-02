import React from "react";

const Stat = (props) => {
  const { handleClick, label, value } = props;

  return (
    <div className="stat" onClick={handleClick}>
      <header style={{ textAlign: "center" }}>{label}</header>
      <div style={{ fontWeight: "bold", textAlign: "center" }}>{value}</div>
    </div>
  );
};

export default Stat;
