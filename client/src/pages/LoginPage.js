import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class LoginPage extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      errors: {},
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();

    axios
      .post("/auth/local", { username, password })
      .then(() => <Redirect to="/dashboard" />)
      .catch((error) => {
        if (error.response) {
          console.log(this.state);
          this.setState({ ...this.state, errors: error.response.data });
        }
      });
  };

  render() {
    const { username, password, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="username"
            onChange={this.handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          {errors.length ? <p style={{ color: "red" }}>{errors}</p> : null}
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginPage;
