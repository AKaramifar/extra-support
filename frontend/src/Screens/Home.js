import React, { Component } from 'react';
import Login from '../Components/Login';
class Home extends Component {
  state = { loginClicked: false };
  handleLogin = () => {
    this.setState(prevStat => {
      return {
        loginClicked: !prevStat.loginClicked,
      };
    });
  };

  render() {
    return <div className="container">{<Login handleLogin={this.handleLogin} />}</div>;
  }
}

export default Home;
