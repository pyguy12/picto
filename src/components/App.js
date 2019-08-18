import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './routes/Home';
import './css/global.css';
import MobileSearch from './routes/MobileSearch';
import SearchResults from './routes/SearchResults';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/mobile-search" component={MobileSearch} />
        <Route path="/images/:id" component={SearchResults} />
      </div>
    </Router>
  );
};

export default App;
