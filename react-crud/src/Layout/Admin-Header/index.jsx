import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
   <header>
    <nav>
        <h1>Admin Page </h1>
        <ul>
            <li><NavLink to={"/admin"} end>DashBoard</NavLink></li>
            <li><NavLink to={"/admin/AddProducts"}>AddProducts</NavLink></li>
            <li><NavLink to={"/admin/Products"}>Products</NavLink></li>
        </ul>
    </nav>
   </header>
  )
}

export default HeaderAdmin