import React from "react";
import { Button } from "@material-ui/core";
import CampingTent from "../assets/icons8-camping-tent-50.png";

const RestButton = ({ handleChange }) => {
  const handleRest = () => {
    handleChange(`slots.level1.spent`, 0);
  };
  return (
    <Button
      onClick={handleRest}
      style={{ alignSelf: "flex-start", marginTop: "1rem" }}
      variant="contained"
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={CampingTent} style={{ height: "32px", width: "32px" }} />
        Rest
      </div>
    </Button>
  );
};

export default RestButton;
