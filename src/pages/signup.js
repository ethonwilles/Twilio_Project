import React, { Component } from "react";

const url = "https://twilio-api-capstone.herokuapp.com/";
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleCreateUser = e => {
    e.preventDefault();
    fetch(`${url}/new-user`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (typeof data.id === typeof 3) {
          this.props.history.push("/");
        }
      })
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <div>
        <div>
          <div className="login-page-wrapper">
            <div className="login-box">
              <h1>Create an Account</h1>

              <form onSubmit={this.handleCreateUser}>
                <div className="username-wrapper">
                  <p>Enter New Username</p>
                  <input
                    type="text"
                    name="username"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                </div>
                <div className="password-wrapper">
                  <p>Enter New Password</p>
                  <input
                    type="password"
                    name="password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <button type="submit">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
