import React from 'react';
import styled from 'styled-components';
import Login from './Login';
import Card from './Card';
import './App.css';

const Container = styled.div``;

class App extends React.Component {
  state = { loginClicked: false };

  handleLogin = () => {
    this.setState(prevStat => {
      return {
        loginClicked: !prevStat.loginClicked,
      };
    });
  };
  render() {
    if (!this.state.loginClicked) {
      return <div className="container-flex">{<Login handleLogin={this.handleLogin} />}</div>;
    } else if (this.state.loginClicked) {
      return (
        <div class="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      );
    }
  }
}
export default App;
