import React from 'react'
import {NavLink}   from 'react-router-dom';
import "../Header/index.css";
const Header = () => {
  return (
    <header>
        <nav>
            <h1>Logo.</h1>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/About"}>About</NavLink></li>
                <li><NavLink to={"/Favorites"}>Favorites</NavLink></li>
                <li><NavLink to={"/Detail"}>Detail</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header