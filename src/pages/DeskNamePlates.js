import React from 'react';
import ProductCard from '../components/ProductCard';
import './CategoryPage.css';

const DeskNamePlates = () => {
  const products = [
    { id: 3, name: "Excelus IAS / Government Officer", price: 999, image: "/images/products/image11.jpg", popular: true },
    { id: 4, name: "Excelus Doctor", price: 999, image: "/images/products/image12.jpg", popular: true },
    { id: 7, name: "Excelus Classic", price: 999, image: "/images/products/image13.jpg", popular: true },
    { id: 9, name: "Excelus Chartered Accountant", price: 999, image: "/images/products/image14.jpg", popular: true },
    { id: 10, name: "Excelus School Principal", price: 999, image: "/images/products/image15.jpg", popular: true },
    { id: 11, name: "Excelus Orthopaedic", price: 999, image: "/images/products/image16.jpg", popular: true },
    { id: 12, name: "Excelus with Photo", price: 1299, image: "/images/products/image17.jpg", popular: true },
    { id: 13, name: "Excelus CBIC Officers", price: 999, image: "/images/products/image18.jpg", popular: true }
  ];

  return (
    <div className="category-page">
      <div className="category-header">
        <h1>Desk Name Plates</h1>
        <p>Professional desk name plates for offices and institutions</p>
      </div>

      <div className="category-filters">
        <select className="filter-select">
          <option>Sort by: Popular</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest First</option>
        </select>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default DeskNamePlates;