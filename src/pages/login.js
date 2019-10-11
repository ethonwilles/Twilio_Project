import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      LOGGED_IN: false
    };
  }

  handleLogIn = e => {
    e.preventDefault();

    fetch(
      `http://localhost:5000/login-user/${this.state.username}/${this.state.password}`
    )
      .then(res => res.json())
      .then(data => {
        if (data.LOGGED_IN) {
          this.setState({
            LOGGED_IN: true
          });
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.LOGGED_IN);
    return (
      <div>
        <div className="login-page-wrapper">
          <div className="login-box">
            <h1>Log In and Chat</h1>

            <form onSubmit={this.handleLogIn}>
              <div className="username-wrapper">
                <p>Enter Username</p>
                <input
                  type="text"
                  name="username"
                  onChange={e => {
                    this.setState({
                      username: e.target.value
                    });
                  }}
                />
              </div>
              <div className="password-wrapper">
                <p>Enter Password</p>
                <input
                  type="password"
                  name="password"
                  onChange={e => {
                    this.setState({
                      password: e.target.value
                    });
                  }}
                />
              </div>
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
