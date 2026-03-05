import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="section-p1">
      <div className="footer-container">
        <div className="col">
          <img src="/images/logo.avif" className="logo" alt="Housenama" />
          <h4>Contact</h4>
          <p><strong>Workshop:</strong> 8 & 15, Mulchand Mansion, 20/30 Princess Street, Mumbai - 400002</p>
          <p><strong>Regd Office:</strong> 501, Amrita Apartments, VS Marg, Dadar W, Mumbai - 400028</p>
          <p><strong>Phone:</strong> +91 8779295624</p>
          <p><strong>Email:</strong> help@housenama.com</p>
          <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        </div>

        <div className="col">
          <h4>Quick Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQ's</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/track-order">Track Your Order</Link>
          <Link to="/installation-guide">Installation Guide</Link>
          <Link to="/franchise">Become a Franchise Partner</Link>
        </div>

        <div className="col">
          <h4>Policies</h4>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/returns">Return & Refund Policy</Link>
          <Link to="/shipping">Shipping Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>

        <div className="col">
          <h4>Blogs</h4>
          <Link to="/blog/building-in-public">Building in Public</Link>
          <Link to="/blog/handmade-in-india">Handmade in India</Link>
          <Link to="/blog/buyers-guide">Nameplate Buyer's Guide</Link>
          <Link to="/blog/naming-matters">Naming Matters</Link>
        </div>

        <div className="col install">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaPinterestP /></a>
          </div>

          <h4>Subscribe to our emails</h4>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026, Housenama - India's #1 Nameplate Brand</p>
      </div>
    </footer>
  );
};

export default Footer;