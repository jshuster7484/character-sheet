import React, { useContext, useEffect } from "react";
import { Button, Container } from "@material-ui/core";

import "./App.css";
import AppContext from "./context/AppContext";
import Abilities from "./components/Abilities";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Inventory from "./components/Inventory";
import Offense from "./components/Offense";
import Skills from "./components/Skills";

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
      <main>
        <header
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <h1>Character Sheet</h1>
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
          <Skills />
        </div>
      </main>
    </Container>
  );
};

export default App;
