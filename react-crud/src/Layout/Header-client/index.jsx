import React from 'react'
import {NavLink}   from 'react-router-dom';
import "../Header-client/index.css"
const HeaderClient = () => {
  return (
    <header>
        <nav>
            <h1>React-app</h1>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/Favorites"}>Favorites</NavLink></li>
                <li><NavLink to={"/Products"}>Products</NavLink></li>
                <li><NavLink to={"/Basket"}>Basket</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderClient