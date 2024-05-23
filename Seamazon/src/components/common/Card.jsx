import React from 'react';
import './Card.css';

function Card({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.name}</h2>
        <p className="card-description">{product.description}</p>
        <p className="card-price">${product.price}</p>
      </div>
    </div>
  );
}

export default Card;
