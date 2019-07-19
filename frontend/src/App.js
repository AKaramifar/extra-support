import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <div className="container main">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
