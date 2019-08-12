import React from 'react';
import './css/SearchBar.css';

const SearchBar = () => {
  return (
    <div className="flex-container">
      <h1 className="logo">Picto</h1>
      <form id="search">
        <input className="search-bar" type="text" value="Search..." />
        <button className="search-button" type="submit" form="search">
          <i className="fas fa-search" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
