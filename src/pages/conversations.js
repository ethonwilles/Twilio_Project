import React, { Component } from "react";

export default class Conv extends Component {
  handleAddContact = () => {
    const parent = document.querySelector(".left-column");
    const new_contact = document.createElement("button");
    new_contact.innerHTML = "Contact";
    new_contact.classList.add("Contact");
    parent.appendChild(new_contact);
  };

  render() {
    return (
      <div className="conv-page">
        <div className="left-column">
          <button className="new-contact" onClick={this.handleAddContact}>
            Add Contact <i class="fas fa-plus"></i>
          </button>
        </div>

        <div className="right-column" type="scroll">
          <div className="content">
            <div>right</div>
          </div>

          <input type="text" />
        </div>
      </div>
    );
  }
}
