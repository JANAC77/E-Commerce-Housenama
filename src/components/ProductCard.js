import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
    >
      {product.popular && <span className="popular-badge">Popular</span>}
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">From ₹ {product.price}</p>
        <button 
          className="add-to-cart"
          onClick={handleAddToCart}
        >
          <FaShoppingCart /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;