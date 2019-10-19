import React, { useContext } from "react";
import { CharactersContext } from "../context/CharactersContext";

const Search = () => {
  const { char, handleChange } = useContext(CharactersContext);

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        name="name"
        value={char.name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
