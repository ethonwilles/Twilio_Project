import React, { Component } from "react";

import Message from "./message";

export default class Conv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      message_actual: []
    };
  }
  handleAddContact = () => {
    const parent = document.querySelector(".left-column");
    const new_contact = document.createElement("button");
    new_contact.innerHTML = "Contact";
    new_contact.classList.add("Contact");
    parent.appendChild(new_contact);
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.state.message_actual.push(this.state.message);
    this.handleMessageGenerate();
    this.setState({ message: "" });
    document.querySelector(".message_input").value = "";
  };

  handleMessageGenerate = () => {
    console.log(this.state.message_actual);

    return this.state.message_actual.map(elem => {
      console.log(elem);
      return <Message message={elem} />;
    });
  };

  render() {
    return (
      <div className="conv-page">
        <div className="left-column">
          <button className="new-contact" onClick={this.handleAddContact}>
            Add Contact <i class="fas fa-plus"></i>
          </button>
        </div>

        <form
          className="right-column"
          type="scroll"
          onSubmit={this.handleFormSubmit}
        >
          <div className="content">{this.handleMessageGenerate()}</div>

          <input
            className="message_input"
            type="text"
            onChange={e => this.setState({ message: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
