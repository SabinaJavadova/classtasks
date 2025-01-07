import React from 'react';
import { useDeleteCategoryByIdMutation, useGetAllCategoriesQuery } from '../redux/Sevices/CategoriesApi';
import { NavLink } from "react-router-dom"


const Categories = () => {
  const { data } = useGetAllCategoriesQuery(); 
  const [deleteCategory] = useDeleteCategoryByIdMutation(); 

  const handleDelete = (id) => {
    deleteCategory(id); 
  };

  return (
    <>
      <h1>Categories</h1>
      <NavLink to={"/add-edit"}>Add Category</NavLink>
      <ul>
        {data?.map((d) => (
          <li key={d.id}>
            <h3>{d.name}</h3>
            <p>{d.description}</p>
            <button onClick={() => handleDelete(d.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;