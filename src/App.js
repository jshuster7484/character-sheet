import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button, Container } from "@material-ui/core";

import "./App.css";
import AppContext from "./context/AppContext";
import Abilities from "./components/Abilities";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Skills from "./components/Skills";

import Isi from "./tests/Isi";
import Zara from "./tests/Zara";

const App = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { edit } = state;

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("state"));
    dispatch({ type: "import_data", payload: storedState });
  }, [dispatch]);

  const handleEditToggle = () => {
    dispatch({ type: "on_input", payload: { key: "edit", value: !edit } });
  };

  return (
    <Container className="App">
      <ul>
        <li>
          <Link to="/isi">Isi</Link>
        </li>
        <li>
          <Link to="/zara">Zara</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <main>
            <header
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <h1>Character Sheet</h1>
              <h2>{process.env.PUBLIC_URL}</h2>
              <Button onClick={handleEditToggle} style={{ height: "auto" }}>
                {edit ? "View Character" : "Edit Character"}
              </Button>
            </header>
            <div>
              <Character />
              <Abilities />
              <Defense />
              <Offense />
              <Inventory />
              {/* <Skills /> */}
            </div>
          </main>
        </Route>
        <Route path="/isi">
          <Isi />
        </Route>
        <Route path="/zara">
          <Zara />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
