import React, { useContext } from 'react';
import { FavoritesContext } from '../../../Context/FavoritesContext';
import { MdFavorite } from 'react-icons/md';
import "../Favorites/index.css"; // Assuming you have some CSS for the favorites page

const Favorites = () => {
  const { favorites, clearFavorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>Your Favorites</h2>
      <div className="cards">
        {favorites.length > 0 ? (
          favorites.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="ikon">
                <MdFavorite />
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
          <p className='parag'>No products in your favorites yet.</p>
        )}
      </div>

      {favorites.length > 0 && (
        <button onClick={clearFavorites} className="clear-favorites-button">
          Clear Favorites
        </button>
      )}
    </div>
  );
};

export default Favorites;
