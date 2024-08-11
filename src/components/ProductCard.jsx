// ProductCard.js

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text"><strong>${product.price}</strong></p>
        <a href="#" className="btn btn-primary">Add To Cart</a>
        <Link to={`/product/${product.id}`} className="btn btn-secondary ml-2">Product Details</Link>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
