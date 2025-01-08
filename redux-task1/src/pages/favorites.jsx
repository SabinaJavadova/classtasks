import React from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <h1>Favorites</h1>
      <ul>
        {favorites.length > 0 ? (
          favorites.map((fav) => (
            <li key={fav.id}>
              <h3>{fav.name}</h3>
              <p>{fav.description}</p>
            </li>
          ))
        ) : (
          <p>No favorites added yet!</p>
        )}
      </ul>
    </>
  );
};

export default Favorites;