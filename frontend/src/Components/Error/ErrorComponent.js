import React, { Component } from "react";

class ErrorComponent extends Component {
  _isMounted = false;
  state = { time: 20 };
  timer = () => {
    const { time } = this.state;
    if (time === 0) {
      clearInterval(this.int);
      this.props.removeStateError(this.props.error.id);
    } else {
      this._isMounted && this.setState({ time: time - 1 });
    }
  };
  componentDidMount() {
    this.int = setInterval(this.timer, 1000);
    this._isMounted = true;
  }

  componentWillUnmount() {
    this.setState({ time: 10 });
    this._isMounted = false;
  }
  render() {
    const { error } = this.props.error
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "10px",
          backgroundColor: "rgba(206, 17, 38, 0.05)",
          border: "1px solid rgb(255, 0, 0)",
          marginBottom: "5px",
          color: "rgb(206, 17, 38)",
          fontSize: "18px",
          height: "fit-content",
          minHeight: "40px",
          display: "flex",
        }}
      >
        <div
          style={{ width: "95%" }}
          dangerouslySetInnerHTML={{ __html:error }}
        />
        <span
          onClick={() => this.props.removeStateError(this.props.error.id)}
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid rgb(255, 0, 0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "2px",
            right: "2px",
            cursor: "pointer",
          }}
        >
          X
        </span>
        <span
          style={{
            width: "20px",
            height: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: "-2px",
            right: "2px",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          {this.state.time}
        </span>
      </div>
    );
  }
}

export default ErrorComponent;
