import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OneProduct from './OneProduct.jsx';
import './AllProducts.css';

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState(['all', 'electronic', 'clothing', 'books', 'furniture']);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      console.log("Fetching products...");
      const res = await axios.get('http://localhost:3000/api/product/');
      console.log("Products data from API:", res.data);
      setData(res.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError("Failed to load products: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredProducts = selectedCategory === 'all' 
    ? data 
    : data.filter(product => {
        console.log("Product category:", product.category, "Selected category:", selectedCategory);
        return product.category?.toLowerCase() === selectedCategory.toLowerCase();
      });

  console.log("Filtered products:", filteredProducts);

  if (loading) return <div className="loading">Loading products...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!data.length) return <div className="no-products">No products available</div>;

  return (
    <div className="container">
      <h1 className="title-h1">All Products</h1>
      <div className="category-navigation">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              console.log("Category clicked:", category);
              setSelectedCategory(category);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <br />
      <div className="products-grid">
        {filteredProducts.map((e,i) => (
          <OneProduct key={i} e={e} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
