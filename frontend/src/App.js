import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Navbar from './Components/Nav';
import Footer from './Components/Footer';
import Errors from './Components/Error';
import Messages from './Components/Messages'
import './App.css';

const App = () => (
  <Router>
    <div className="app">
      <Navbar />
      <Errors />
      <Messages />
      <div className="container main">
        <Routes />
      </div>
      <Footer />
    </div>
  </Router>
);

export default App;
