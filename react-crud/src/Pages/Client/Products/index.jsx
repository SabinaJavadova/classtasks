import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../../Context/FavoritesContext';
import getAllData from '../../../Data/index.js';
import { endpoints } from '../../../Data/constant.js';
import "../Products/index.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
  const [sortOrder, setSortOrder] = useState('asc');
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const data = await getAllData(endpoints.products);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setSearchVal(e.target.value.trim());
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const toggleFavorite = (product) => {
    if (favorites.some((fav) => fav.id === product.id)) {
      removeFromFavorites(product);
    } else {
      addToFavorites(product);
    }
  };

  const sortProducts = (products) => {
    return products.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
  };

  const filteredProducts = products.filter((p) =>
    p.title.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
  );

  const sortedProducts = sortProducts([...filteredProducts]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <div className="ip">
        <input type="text" placeholder="Search..." onChange={handleSearch} />
      </div>

      <div className="sorting-controls">
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="cards">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="ikon" onClick={() => toggleFavorite(p)}>
                {favorites.some((fav) => fav.id === p.id) ? (
                  <MdFavorite style={{ color: 'red' }} />
                ) : (
                  <MdFavoriteBorder />
                )}
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
          <p>No products found.</p>
        )}
      </div>

      <footer className="footer">
        <div className="container">
          <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Products;
