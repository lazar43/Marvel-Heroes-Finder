import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CharactersContext = createContext();

const CharactersContextProvider = props => {
  const [char, setChar] = useState({ name: "" });
  const [heroes, setHeroes] = useState({
    hero: "",
    picture: "",
    description: "",
    id: ""
  });

  const localData = localStorage.getItem("favorites");
  const data = localData ? JSON.parse(localData) : [];
  const [favHeroes, setFavHeroes] = useState(data);

  const handleChange = e => {
    setChar({ [e.target.name]: e.target.value });
  };

  const handleAddBookmarks = (hero, picture, description, id) => {
    setFavHeroes([...favHeroes, { hero, picture, description, id }]);
  };

  const handleRemoveBookmark = id => {
    const heroes = favHeroes.filter(item => item.id !== id);
    setFavHeroes(heroes);
  };

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${char.name}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=99bc13e1b3b08ff9afb3cf2fafc04344`
      )
      .then(res => {
        if (res.data.data.results.length > 0) {
          setHeroes({
            hero: res.data.data.results[0].name,
            picture: res.data.data.results[0].thumbnail.path,
            description: res.data.data.results[0].description,
            id: res.data.data.results[0].id
          });
        } else {
          setHeroes({
            hero: "",
            picture: "",
            description: "",
            id: ""
          });
        }
        console.log(res);
      });
  }, [char]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favHeroes));
  }, [favHeroes]);

  return (
    <CharactersContext.Provider
      value={{
        char,
        heroes,
        favHeroes,
        handleChange: handleChange,
        handleAddBookmarks: handleAddBookmarks,
        handleRemoveBookmark: handleRemoveBookmark
      }}
    >
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
