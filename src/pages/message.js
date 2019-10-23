import React, { Component } from "react";

export default class Message extends Component {
  render() {
    return (
      <div>
        <p className="user_message">{this.props.message}</p>
      </div>
    );
  }
}
