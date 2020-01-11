import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { getAbilityModifier } from "../utils";

const abilities = [
  {
    name: "Strength",
    score: 14,
  },
  {
    name: "Dexterity",
    score: 6,
  },
  {
    name: "Constitution",
    score: 10,
  },
  {
    name: "Intelligence",
    score: 17,
  },
  {
    name: "Wisdom",
    score: 14,
  },
  {
    name: "Charisma",
    score: 9,
  },
];

function Abilities() {
  return (
    <section className="abilities" style={{ maxWidth: 360 }}>
      {/* <List component="nav">
        {abilities.map(ability => (
          <ListItem key={ability.name}>
            <ListItemText primary={ability.name} />
            <Typography>{ability.score}</Typography>
          </ListItem>
        ))}
      </List> */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell align="right" children="Ability Score" />
              <TableCell align="right" children="Ability Modifier" />
            </TableRow>
          </TableHead>
          <TableBody>
            {abilities.map(ability => (
              <TableRow key={ability.name}>
                <TableCell children={ability.name} />
                <TableCell align="right" children={ability.score} />
                <TableCell
                  align="right"
                  children={getAbilityModifier(ability.score)}
                />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default Abilities;
