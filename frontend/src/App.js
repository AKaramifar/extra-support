import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

const App = () => (
  <Router>
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Routes />
      </div>
    </div>
  </Router>
);

export default App;
