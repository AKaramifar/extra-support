import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Components/Nav';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <div className="container">
        <Routes />
      </div>
    </div>
  </Router>
);

export default App;
