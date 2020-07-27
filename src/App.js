import React, { useContext, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import "./App.css";
import AppContext, { newCharacter } from "./context/AppContext";
import CharacterSheet from "./components/CharacterSheet";
import AddIcon from "@material-ui/icons/Add";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const App = () => {
  const context = useContext(AppContext);
  const { state, dispatch } = context;
  const { characters } = state;
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem("state"));
    dispatch({ type: "import_data", payload: storedState });
  }, [dispatch]);

  const addCharacter = () => {
    dispatch({
      type: "add_item",
      payload: {
        key: "characters",
        value: newCharacter,
      },
    });
    dispatch({ type: "save_data" });
  };

  const handleCharacteChange = (index) => {
    setTab(index);
    dispatch({
      type: "on_input",
      payload: {
        key: "activeCharacterIndex",
        value: index,
      },
    });
    dispatch({ type: "save_data" });
  };

  return (
    <Container className="App">
      <AppBar color="default">
        <Tabs value={tab}>
          {characters.map((character, index) => (
            <Tab
              label={character.name}
              onClick={() => handleCharacteChange(index)}
            />
          ))}
          <IconButton onClick={addCharacter}>
            <AddIcon />
          </IconButton>
        </Tabs>
      </AppBar>
      <CharacterSheet />
    </Container>
  );
};

export default App;
