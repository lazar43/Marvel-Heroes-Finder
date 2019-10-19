import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

const Result = () => {
  const {
    heroes,
    favHeroes,
    handleAddBookmarks,
    handleRemoveBookmark
  } = useContext(CharactersContext);

  return (
    <div className="img-container">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {favHeroes.find(hero => hero.id === heroes.id) ? (
            <i
              onClick={() => handleRemoveBookmark(heroes.id)}
              className="fas fa-heart"
            ></i>
          ) : (
            <i
              onClick={() =>
                handleAddBookmarks(
                  heroes.hero,
                  heroes.picture,
                  heroes.description,
                  heroes.id
                )
              }
              className="far fa-heart"
            ></i>
          )}

          <h1 className="img__title">{heroes.hero}</h1>
          {heroes.picture ? (
            <img
              className="img__image"
              src={heroes.picture + "/portrait_uncanny.jpg"}
              alt=""
            />
          ) : (
            <h2>Not Found</h2>
          )}
        </div>
        <div className="flip-card-back">
          {favHeroes.find(hero => hero.id === heroes.id) ? (
            <i
              onClick={() => handleRemoveBookmark(heroes.id)}
              className="fas fa-heart"
            ></i>
          ) : (
            <i
              onClick={() =>
                handleAddBookmarks(
                  heroes.hero,
                  heroes.picture,
                  heroes.description,
                  heroes.id
                )
              }
              className="far fa-heart"
            ></i>
          )}
          <h1>{heroes.hero}</h1>
          <p>{heroes.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Result;
