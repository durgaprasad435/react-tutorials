import React, { Component } from "react";

class UpdateMessage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      msg: "How are you?",
    };
    this.updateMessage=this.updateMessage.bind(this);
  }
  updateMessage() {
    this.setState({
      msg: "ok",
    });
  }
  render() {
    return (
      <div>
        <h1>Hello Durga</h1>
        <h2>{this.state.msg}</h2>
        <button onClick={this.updateMessage}>Click</button>
      </div>
    );
  }
}

export default UpdateMessage;
