import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Login from './pages/Login';
// import About from './pages/About';
// import Contact from './pages/Contact';
import DeskNamePlates from './pages/DeskNamePlates';
import HouseNamePlates from './pages/HouseNamePlates';
import Wallpapers from './pages/Wallpapers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Toaster position="top-right" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/desk-nameplates" element={<DeskNamePlates />} />
        <Route path="/house-nameplates" element={<HouseNamePlates />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;