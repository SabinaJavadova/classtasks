import React from 'react';
import { useFavorites } from '../../../Context/FavoritesContext';
import { MdFavorite } from 'react-icons/md';
import "../Favorites/index.css";

const Favorites = () => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();

  const handleRemoveFromFavorites = (product) => {
    removeFromFavorites(product);
  };

  const handleClearFavorites = () => {
    clearFavorites(); 
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="cards">
        {favorites.length > 0 ? (
          favorites.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="ikon" onClick={() => handleRemoveFromFavorites(p)}>
                <MdFavorite style={{ color: 'red' }} />
              </div>

              <div className="product-image">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="product-details">
                <h3 className="product-title">{p.title}</h3>
                <p className="product-description">{p.description.slice(0, 40)}...</p>
                <p className="product-price">${p.price}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No products in your favorites yet.</p>
        )}
      </div>

      {favorites.length > 0 && (
        <button onClick={handleClearFavorites} className="clear-favorites-button">
          Clear All
        </button>
      )}
    </div>
  );
};

export default Favorites;
