import React, { useContext, useEffect } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import AppContext from "./context/AppContext";
import Abilities from "./components/Abilities";
import Character from "./components/Character";
import Weapons from "./components/Weapons";

const App = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { edit } = state;

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("state"));
    dispatch({ type: "import_data", payload: storedState });
  }, [dispatch]);

  return (
    <Container className="App">
      <Character />
      <Abilities />
      <Weapons />
    </Container>
  );
};

export default App;
