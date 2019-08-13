import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import './css/global.css';

const App = () => {
  return (
    <div>
      <SearchBar />
      <ImageList listName="New Images" />
    </div>
  );
};

export default App;
