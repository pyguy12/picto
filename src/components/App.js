import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './routes/Home';
import './css/global.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  );
};

export default App;
