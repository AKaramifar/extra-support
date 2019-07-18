import React, { Component } from 'react';

class TimeBox extends Component {
  state = { toggelColor: false };
  changeColor = () => {
    this.setState(prevState => {
      return { toggelColor: !prevState.toggelColor };
    });
  };
  render() {
    return (
      <div onClick={this.changeColor}>
        {!this.state.toggelColor && (
          <div
            className="shadow p-2  mr-5 mt-5 bg-white justify-content-center rounded"
            style={{ width: '150px', borderRadius: '50%' }}
          >
            <h6>{this.props.time}</h6>
          </div>
        )}

        {this.state.toggelColor && (
          <div
            className="shadow p-2 mr-5 mt-5 bg-primary text-white justify-content-center rounded"
            style={{ width: '150px' }}
          >
            <h6>{this.props.time}</h6>
          </div>
        )}
      </div>
    );
  }
}

export default TimeBox;
