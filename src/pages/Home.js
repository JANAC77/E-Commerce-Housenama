import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import ProductCard from '../components/ProductCard';
import ReviewCard from '../components/ReviewCard';
import { motion } from 'framer-motion';
import { FaTruck, FaPalette, FaHeart, FaRuler, FaShieldAlt, FaClock } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const features = [
    { icon: <FaTruck />, title: "Free Shipping", description: "Free delivery across India" },
    { icon: <FaPalette />, title: "Unique Designs", description: "Exclusive designer collections" },
    { icon: <FaHeart />, title: "100% Love-it Guarantee", description: "Love it or we'll make it right" },
    { icon: <FaRuler />, title: "Live Preview", description: "See your nameplate before ordering" },
    { icon: <FaShieldAlt />, title: "Premium Quality", description: "Grade 304 stainless steel" },
    { icon: <FaClock />, title: "13+ Years", description: "150,000+ nameplates delivered" }
  ];

  const bestSellers = [
    { id: 1, name: "Futura (Matte Black)", price: 549, image: "/images/products/image1.jpg", popular: true },
    { id: 2, name: "Golden Portoro", price: 649, image: "/images/products/image2.jpg", popular: true },
    { id: 3, name: "Excelus IAS Officer", price: 999, image: "/images/products/image3.jpg", popular: true },
    { id: 4, name: "Excelus Doctor", price: 999, image: "/images/products/image4.jpg", popular: true },
    { id: 5, name: "Futura (Gold SS)", price: 1099, image: "/images/products/image5.jpg", popular: true },
    { id: 6, name: "Futura (Matte White)", price: 549, image: "/images/products/image6.jpg", popular: true },
    { id: 7, name: "Excelus Classic", price: 999, image: "/images/products/image7.jpg", popular: true },
    { id: 8, name: "Barlow GST Board", price: 899, image: "/images/products/image8.jpg", popular: true }
  ];

  const reviews = [
    { name: "Irfan", product: "Teddy on the Moon", rating: 5, text: "Very good" },
    { name: "Parul", product: "Futura Gold SS", rating: 5, text: "Very good" },
    { name: "Venkata", product: "Sameeksha Wooden", rating: 5, text: "Excellent quality" },
    { name: "Harsha", product: "Excelus Principal", rating: 5, text: "Excellent quality" },
    { name: "Abhidnya", product: "Khurana Cutout", rating: 5, text: "Such nice one" }
  ];

  return (
    <>
      <HeroSection />

      <section className="welcome-section section-p1">
        <div className="container">
          <h2>Welcome to Housenama</h2>
          <h3>Why buy a nameplate from us?</h3>
          <p className="subtitle">Housenama - India's #1 Nameplate Brand. Personalizing homes since 2011.</p>
          
          <div className="stats">
            <div className="stat-item">
              <h4>13+ years</h4>
              <p>of excellence</p>
            </div>
            <div className="stat-item">
              <h4>150,000+</h4>
              <p>nameplates delivered</p>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section-p1">
        <div className="container">
          <h2 className="section-title">What makes us superior?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="collections-section section-p1">
        <div className="container">
          <h2 className="section-title">Designer Name-plate Collections</h2>
          <div className="collections-grid">
            <div className="collection-item desk">
              <h3>Desk Name Plates</h3>
            </div>
            <div className="collection-item modern">
              <h3>Modern Name Plates</h3>
            </div>
            <div className="collection-item metal">
              <h3>Metal Name Plates</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="live-preview-section section-p1">
        <div className="container">
          <div className="preview-content">
            <h2>Live Preview</h2>
            <p>Our live preview feature allows you to see your customized nameplate before you place an order.</p>
            <button className="btn-primary">Try Live Preview →</button>
          </div>
        </div>
      </section>

      <section className="best-sellers-section section-p1">
        <div className="container">
          <h2 className="section-title">Meet our best-sellers</h2>
          <div className="products-grid">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-section section-p1">
        <div className="container">
          <h2 className="section-title">Real Customers. Real Reviews.</h2>
          <p className="reviews-count">from 5564+ reviews</p>
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <ReviewCard key={index} review={review} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;