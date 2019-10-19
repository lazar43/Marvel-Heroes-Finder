import React from "react";
import "./App.css";
import CharactersContextProvider from "./context/CharactersContext";
import Search from "./components/Search";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <CharactersContextProvider>
        <Search />
        <Result />
      </CharactersContextProvider>
    </div>
  );
}

export default App;
