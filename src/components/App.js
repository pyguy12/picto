import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import SearchForm from './SearchForm';
import Hero from './Hero';
import './css/global.css';

const App = () => {
  return (
    <div>
      <SearchBar />
      <Hero
        title="Picto"
        description="Picto uses Unsplash’s developer API to retrieve images and was built
        using React."
        component={<SearchForm />}
      />
      <ImageList listName="New Images" />
    </div>
  );
};

export default App;
