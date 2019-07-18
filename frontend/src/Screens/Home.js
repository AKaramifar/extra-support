import React, { Component } from 'react';
import Login from '../Components/Login';
class Home extends Component {


  render() {
    return <div className="container">{<Login {...this.props} />}</div>;
  }
}

export default Home;
