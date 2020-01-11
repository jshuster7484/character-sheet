import React from "react";
import "./App.css";
import Character from "./components/Character";
import Defense from "./components/Defense";
import Offense from "./components/Offense";
import Portrait from "./components/Portrait";
import Skills from "./components/skills/Skills";
import Container from "@material-ui/core/Container";

import ashData from "./ash.json";

const DataContext = React.createContext();

export function useData() {
  const context = React.useContext(DataContext);
  if (!context) {
    throw new Error(`useData must be used within a DataProvider`);
  }
  return context;
}
function DataProvider(props) {
  const [data, setData] = React.useState(ashData);
  const value = React.useMemo(() => [data, setData], [data]);
  return <DataContext.Provider value={value} {...props} />;
}

function App() {
  return (
    <Container className="App">
      <main>
        <DataProvider>
          <Portrait />
          <Character />
          <Defense />
          <Offense />
          <Skills style={{ gridRow: 1 }} />
        </DataProvider>
      </main>
    </Container>
  );
}

export default App;
