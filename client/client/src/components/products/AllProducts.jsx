import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import OneProduct from './OneProduct.jsx';
import './AllProducts.css';

const AllProducts = () => {
  const [data,SetData]=useState([]);
  useEffect(()=>{
    getData()
  },[])
  const getData=async()=>{
    try {
      const res=await axios.get('http://localhost:3000/api/product/')
      console.log("Products data from API:", res.data);
      SetData(res.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  
  return (
    <div className="container">
      <h1 className="text-center mt-4">All Products</h1>
      <div className="products-grid">
        {data.map((e, i) => (
          <OneProduct key={i} e={e}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
