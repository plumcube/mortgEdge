import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to create this CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Replace the src attribute with the path to your logo */}
        <img src="path/to/your/logo.png" alt="Logo" />
      </div>
      <div className="nav-links">
        <Link to="/individual">For Individual</Link>
        <Link to="/investments">Investments</Link>
        <Link to="/business">For Business</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
