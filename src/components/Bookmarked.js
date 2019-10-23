import React from "react";

const Bookmarked = ({ hero, handleRemoveBookmark }) => {
  return (
    <article className="img-container">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <i
            onClick={() => handleRemoveBookmark(hero.id)}
            className="fas fa-heart"
          ></i>
          <h1 className="img__title">{hero.hero}</h1>
          {hero.picture ? (
            <img
              className="img__image"
              src={hero.picture + "/portrait_uncanny.jpg"}
              alt=""
            />
          ) : (
            <h2>Not Found</h2>
          )}
        </div>
        <div className="flip-card-back">
          <i
            onClick={() => handleRemoveBookmark(hero.id)}
            className="fas fa-heart"
          ></i>
          <h1>{hero.hero}</h1>
          <p>{hero.description}</p>
        </div>
      </div>
    </article>
  );
};

export default Bookmarked;
