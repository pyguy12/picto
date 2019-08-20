import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './routes/Home';
import MobileSearch from './routes/MobileSearch';
import SearchResults from './routes/SearchResults';
import ImageDisplay from './routes/ImageDisplay';
import './css/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/mobile-search" component={MobileSearch} />
        <Route path="/images/:id" component={SearchResults} />
        <Route path="display-image/:id" component={ImageDisplay} />
      </div>
    </Router>
  );
};

export default App;
