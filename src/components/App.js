import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import Hero from './Hero';
import './css/global.css';

const App = () => {
  return (
    <div>
      <SearchBar />
      <Hero />
      <ImageList listName="New Images" />
    </div>
  );
};

export default App;
