import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="nav-link" to="/">
        <i className="fas fa-home nav-button" />
      </Link>
      <Link className="nav-link" to="/mobile-search">
        <i className="fas fa-search nav-button" />
      </Link>
    </nav>
  );
};

export default Navbar;
