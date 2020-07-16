import React, { Component } from "react";

class Message extends Component {
  _isMounted = false;
  state = { time: 20 };
  timer = () => {
    const { time } = this.state;
    if (time === 0) {
      clearInterval(this.int);
      this.props.removeMessage(this.props.message.id);
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
    const { message } = this.props.message
    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          padding: "10px",
          backgroundColor: "rgba(4, 199, 4, 0.05)",
          border: "1px solid rgb(4, 199, 4)",
          marginBottom: "5px",
          color: "rgb(0, 0, 0)",
          fontSize: "18px",
          height: "fit-content",
          minHeight: "40px",
          display: "flex",
        }}
      >
        <div
          style={{ width: "95%" }}
          dangerouslySetInnerHTML={{ __html:message }}
        />
        <span
          onClick={() => this.props.removeMessage(this.props.message.id)}
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid rgb(4, 199, 4)",
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

export default Message;
