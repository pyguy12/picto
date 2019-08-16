import React from 'react';
import SearchForm from './SearchForm';

const Hero = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Picto</h1>
      <p className="hero-description">
        Picto uses Unsplash’s developer API to retrieve images and was built
        using React. The design for this project was created in Figma.
      </p>
      <SearchForm />
    </div>
  );
};

export default Hero;
