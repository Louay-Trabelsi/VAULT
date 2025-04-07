import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OneProduct.css';

const OneProduct = ({ e }) => {
  const navigate = useNavigate();
  
  console.log("OneProduct received data:", e);

  if (!e) {
    console.error("OneProduct received no data");
    return null;
  }

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={e.image} 
          className="product-image" 
          alt={e.name} 
        />
      </div>
      <div className="product-info">
        <h5 
          onClick={() => navigate(`/product/${e.id}`)} 
          className="product-title1"
        >
          {e.name}
        </h5>
        <p className="product-price"><strong>Price:</strong> ${e.price}</p>
        <p className="product-rating"><strong>Rating:</strong> {e.rating} ⭐</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default OneProduct;
