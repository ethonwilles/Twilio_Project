import React, { Component } from "react";

const url = "https://twilio-api-capstone.herokuapp.com/";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      LOGGED_IN: false
    };
  }

  handleLogIn = e => {
    e.preventDefault();

    fetch(`${url}/login-user/${this.state.username}/${this.state.password}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.LOGGED_IN === true) {
          this.setState({
            LOGGED_IN: true
          });
          document.querySelector(".login").style = { visibility: "hidden" };
          this.props.history.push("/");
        } else {
          this.setState({
            LOGGED_IN: data.LOGGED_IN
          });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="login-page-wrapper">
          <div className="login-box">
            <h1>Log In and Chat</h1>

            <form onSubmit={this.handleLogIn}>
              <div className="username-wrapper">
                <p>Enter Username</p>
                {this.state.LOGGED_IN === "Wrong Username!" ? (
                  <p className="invalid-pass">Invalid Username!</p>
                ) : null}
                <input
                  type="text"
                  name="username"
                  onChange={e => {
                    this.setState({
                      username: e.target.value,
                      LOGGED_IN: false
                    });
                  }}
                />
              </div>
              <div className="password-wrapper">
                <p>Enter Password</p>
                {this.state.LOGGED_IN === "Wrong Password!" ? (
                  <p className="invalid-pass">Invalid Password!</p>
                ) : null}
                <input
                  type="password"
                  name="password"
                  onChange={e => {
                    this.setState({
                      password: e.target.value,
                      LOGGED_IN: false
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
