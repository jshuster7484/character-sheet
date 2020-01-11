import React from "react";
import InfoTip from "./InfoTip";
import Stat from "./Stat";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const daggerAttackModifiers = [
  {
    name: "Base Attack Bonus",
    value: 4,
  },
  {
    name: "Dexterity",
    value: 6,
  },
  {
    name: "Weapon Focus",
    value: 1,
  },
  {
    name: "Two Weapon Fighting",
    value: -2,
  },
];

export default function Offense() {
  return (
    <section className="offense">
      <h1>Offense</h1>
      <div style={{ display: "flex" }}>
        <Stat label="Initiative" value="8" />
        <Stat label="Speed" value="30" />
        <Stat label="CMB" value="4" />
      </div>
      <h2>Melee</h2>
      <p>
        Roll a d20 and add attack bonus. If the attack succeeds roll the damage
        die and add the damage bonus.
      </p>
      <p>
        If the roll from the d20 is within the critical range, roll to confirm a
        critical hit.
      </p>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Melee Weapon</TableCell>
              <TableCell>Attack Bonus</TableCell>
              <TableCell>Damage Die</TableCell>
              <TableCell>Damage Bonus</TableCell>
              <TableCell>Critical</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Dagger</TableCell>
              <InfoTip modifiers={daggerAttackModifiers}>
                <TableCell>+9</TableCell>
              </InfoTip>
              <TableCell>1d4</TableCell>
              <TableCell>+8</TableCell>
              <TableCell>19-20, x2</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
