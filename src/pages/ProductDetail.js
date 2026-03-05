import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import { FaShoppingCart } from 'react-icons/fa';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // This would normally come from an API based on the ID
  const product = {
    id: parseInt(id),
    name: "Futura (Matte Black)",
    price: 549,
    description: "Contemporary House Number/Name Sign",
    images: [
      "/images/products/image1.jpg",
      "/images/products/image2.jpg",
      "/images/products/image3.jpg",
      "/images/products/image4.jpg"
    ],
    features: [
      "Premium Matte Black Finish",
      "Grade 304 Stainless Steel",
      "Weather Resistant",
      "Easy Installation",
      "5 Year Warranty"
    ],
    specifications: {
      material: "Stainless Steel",
      finish: "Matte Black",
      size: "12 x 4 inches",
      mounting: "Screw or Adhesive",
      included: "Mounting hardware, Template"
    }
  };

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity
    });
  };

  return (
    <div className="product-detail-page section-p1">
      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img src={product.images[selectedImage]} alt={product.name} />
          </div>
          <div className="thumbnail-images">
            {product.images.map((img, index) => (
              <div 
                key={index}
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={img} alt={`${product.name} ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          
          <div className="product-price">
            <span className="price-label">Price:</span>
            <span className="price-value">₹ {product.price}</span>
          </div>

          <div className="product-quantity">
            <label>Quantity:</label>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>

          <div className="product-features">
            <h3>Features</h3>
            <ul>
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="product-specifications">
            <h3>Specifications</h3>
            <table>
              <tbody>
                {Object.entries(product.specifications).map(([key, value]) => (
                  <tr key={key}>
                    <td className="spec-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</td>
                    <td className="spec-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <section className="related-products">
        <h2>You may also like</h2>
        <div className="products-grid">
          {/* Add related products here */}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;