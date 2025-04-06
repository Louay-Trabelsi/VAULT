import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './OneProduct.css';
import { useNavigate } from 'react-router-dom';
const OneProduct = ({ e }) => {
  const navigate = useNavigate();
  return (
    <div className="card product-card">
      <img src={e.image} className="product-image" alt={e.name} />
      <div className="card-body">
        <h5 onClick={()=>{
          navigate(`/product/${e.id}`)
        }}  className="card-title">{e.name}</h5>
        <p><strong>Price:</strong> ${e.price}</p>
        <p><strong>Rating:</strong> {e.rating} ⭐</p>
        <button className="btn btn-primary">Add to Cart </button>
      </div>
    </div>
  );
};
export default OneProduct;
