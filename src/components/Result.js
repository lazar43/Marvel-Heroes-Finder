import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Bookmarked from "./Bookmarked";
import Searched from "./Searched";

const Result = () => {
  const { heroes, char, favHeroes, handleRemoveBookmark } = useContext(
    CharactersContext
  );
  return (
    <div className="results-container">
      {char.name.length === 0 ? (
        favHeroes.map(hero => (
          <Bookmarked
            hero={hero}
            handleRemoveBookmark={handleRemoveBookmark}
            key={hero.id}
          />
        ))
      ) : heroes.hero.length > 0 ? (
        <Searched />
      ) : (
        <h1>Not Found Hero with {char.name} name</h1>
      )}
    </div>
  );
};

export default Result;
