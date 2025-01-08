import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/slices/favoritesSlice";
import { useGetAllCategoriesQuery } from "../redux/Sevices/CategoriesApi";
import { NavLink } from "react-router-dom";




const Categories = () => {
  const { data } = useGetAllCategoriesQuery();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  const isFavorite = (id) => favorites.some((fav) => fav.id === id);

  const toggleFavorite = (category) => {
    if (isFavorite(category.id)) {
      dispatch(removeFavorite(category.id));
    } else {
      dispatch(addFavorite(category));
    }
  };



  return (
    <>
        <h1>Categories</h1>
      <NavLink to={"/add-edit"}>Add Category</NavLink>
      <ul>
        {data?.map((category) => (
          <li key={category.id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <button
              onClick={() => toggleFavorite(category)}
              style={{
                color: isFavorite(category.id) ? "red" : "black",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
            >
              ❤
            </button>
          </li>
        ))}
      </ul>

    </>
  );
};

export default Categories;