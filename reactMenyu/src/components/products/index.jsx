import { useState, useEffect } from "react";
import controller from "../../services";
import { endpoints } from "../../services/constant";
import AddProduct from "./AddProduct";
import Cards from "./Cards";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const data = await controller.getAllData(endpoints.recipes);
    setRecipes(data);
  };
  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AddProduct recipes={recipes} setRecipes={setRecipes} />
      <Cards recipes={recipes.recipes} setRecipes={setRecipes} />
    </div>
  );
};
export default Recipes;
