import React from 'react';
import ImageList from './ImageList';
import Navbar from './Navbar';
import SearchForm from './SearchForm';
import Hero from './Hero';
import './css/global.css';

const App = () => {
  return (
    <div>
      <Navbar />
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
