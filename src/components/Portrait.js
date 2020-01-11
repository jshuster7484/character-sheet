import React from "react";
import portrait from "../corvo.jpg";
import Stat from "./Stat";
import { useData } from "../App";

export default function Portrait() {
  const [data] = useData();
  const bloodPercentage = (1 - data.hp / data.max_hp) * 100 + "%";
  return (
    <section className="portrait">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="portraitWrapper">
          <img
            alt="Character Portrait"
            className="portraitImage"
            src={portrait}
          />
          <div className="portraitBlood" style={{ height: bloodPercentage }} />
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      >
        <Stat label="Hit Points" value={`${data.hp}/${data.max_hp}`} />
      </div>
    </section>
  );
}
