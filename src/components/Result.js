import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";
import Bookmarked from "./Bookmarked";
import Searched from "./Searched";
import EmptyBookmark from "./EmptyBookmark";

const Result = () => {
  const { heroes, char, favHeroes, handleRemoveBookmark } = useContext(
    CharactersContext
  );
  return (
    <section className="results-container">
      {(favHeroes.length === 0) & (char.name.length === 0) ? (
        <EmptyBookmark />
      ) : null}
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
    </section>
  );
};

export default Result;
