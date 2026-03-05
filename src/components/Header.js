import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getCartCount } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section id="header">
      <Link to="/" onClick={closeMenu}>
        <img src="/images/logo.avif" className="logo" alt="Housenama" />
      </Link>

      <div className="mobile-menu-btn" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul id="navbar" className={menuOpen ? 'active' : ''}>
        <li>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/desk-nameplates" onClick={closeMenu}>Desk Name Plates</NavLink>
        </li>
        <li>
          <NavLink to="/house-nameplates" onClick={closeMenu}>House Name Plates</NavLink>
        </li>
        <li>
          <NavLink to="/wallpapers" onClick={closeMenu}>Wallpapers</NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="cart-icon" onClick={closeMenu}>
            <FaShoppingBag />
            {getCartCount() > 0 && (
              <span className="cart-count">{getCartCount()}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Header;