import React from 'react';
import './css/SearchBar.css';
import SearchForm from './SearchForm';

const SearchBar = () => {
  return (
    <div className="flex-container">
      <h1 className="logo">Picto</h1>
      <SearchForm />
    </div>
  );
};

export default SearchBar;
