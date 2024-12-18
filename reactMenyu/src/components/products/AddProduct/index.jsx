import { useState, useEffect } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constant";
const AddProduct = ({ products, setProducts }) => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    image: "",
    rating: 0
  });}

  export default AddProduct;

