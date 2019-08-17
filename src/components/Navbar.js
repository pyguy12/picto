import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link className="nav-link" to="/">
        <i class="fas fa-home nav-button" />
      </Link>
      <Link className="nav-link" to="/">
        <i class="fas fa-search nav-button" />
      </Link>
    </nav>
  );
};

export default Navbar;
