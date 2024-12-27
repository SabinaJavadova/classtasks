import React, { useState, useEffect, useContext } from 'react';
import { FavoritesContext } from '../../../Context/FavoritesContext';
import { MdFavorite } from "react-icons/md";
import getAllData from "../../../Data/index.js";
import { endpoints } from "../../../Data/constant.js";
import "../Home/index.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const { toggleFavorites } = useContext(FavoritesContext); 

  const getProducts = async () => {
    try {
      const data = await getAllData(endpoints.products);
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <div className="cards">
        {products.length > 0 &&
          products.map((p) => (
            <div className="product-card" key={p.id}>
              <div className="ikon" onClick={() => toggleFavorites(p)}>
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
          ))}
      </div>
    </div>
  );
};

export default Home;
