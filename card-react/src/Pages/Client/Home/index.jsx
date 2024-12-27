import React from 'react'
import { endpoints } from '../../../Data/constant.js';
import { useState, useEffect } from 'react';
import getAllData from "../../../Data/index.js"
import "../Home/index.css"
import { MdFavorite } from "react-icons/md";
const Home = () => {

  const [products, setProducts] = useState([]);
  
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
    <>
    <div className="App">
      <div className="cards">

      {products.length> 0 && products.map((p)=>{
        return(
            <div className="product-card" key={p.id}>
            {}
            <div className="ikon">

            <MdFavorite />
            </div>
            <div className="product-image">
              <img src={p.image} alt={p.title} />
            </div>
      
            {}
            <div className="product-details">
              <h3 className="product-title">{p.title}</h3>
              <p className="product-description">{p.description.slice(0,40)} </p>
              <p className="product-price">${p.price}</p>
            </div>
      
            {}
          </div>
      
        )
      })}
      </div>

      {}
    

      {}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home