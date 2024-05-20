import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      first: "Good Bye!",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.first}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
