import React from 'react';
import './css/Hero.css';

const Hero = ({ title, description, component }) => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">{title}</h1>
      <p className="hero-description">{description}</p>
      {component}
    </div>
  );
};

export default Hero;
