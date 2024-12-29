import React, { useState, useEffect } from 'react';
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../../Context/FavoritesContext';
import getAllData from '../../../Data/index.js';
import { endpoints } from '../../../Data/constant.js';
import { Table, Button } from 'antd';  // Import Ant Design Table and Button
import "../Products/index.css";
import { Helmet } from "react-helmet-async";

const AdminProducts = () => {
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

  // Define columns for Ant Design's Table component
  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (image) => <img src={image} alt="Product" width={50} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      render: (description) => description.slice(0, 40) + '...',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },

    {
      title: 'Actions',
      render: (_, record) => (
        <div>
          <Button onClick={() => handleEdit(record)} style={{ marginRight: 8 }}>
            Edit
          </Button>
          <Button onClick={() => handleDelete(record.id)} danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleEdit = (product) => {
    navigate(`/edit-product/${product.id}`);
  };

  const handleDelete = (id) => {
    // Logic to delete the product from the backend (and state)
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <>
      <Helmet>
        <title>Admin Products</title>
      </Helmet>
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

        <Table
          columns={columns}
          dataSource={sortedProducts}
          rowKey="id"
          pagination={false}
          // Additional Ant Design table props can go here
        />

        <footer className="footer">
          <div className="container">
            <p className="footer-text">&copy; 2024 Your Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AdminProducts;
