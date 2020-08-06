import React, { Component } from "react";
import axios from "axios";

class SignUpPage extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      errors: false,
    };
  }

  handleChange = (e) => {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => console.log(this.state)
    );
  };

  checkPassword = () => {
    return this.state.password === this.state.confirmPassword;
  };

  handleSubmit = (e) => {
    const { username, password } = this.state;
    e.preventDefault();

    this.checkPassword();

    if (this.checkPassword) {
      axios.post("/auth/local", { username, password });
      this.resetForm();
    } else {
      this.setState({ errors: true });
    }
  };

  resetForm = () => {
    this.setState({
      username: "",
      password: "",
      confirmPassword: "",
      errors: false,
    });
  };

  render() {
    const { username, password, confirmPassword, errors } = this.state;
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
          <input
            type="password"
            value={confirmPassword}
            name="confirmPassword"
            placeholder="confirm password"
            onChange={this.handleChange}
          />
          {errors ? (
            <p style={{ color: "red" }}>Passwords don't match</p>
          ) : null}
          <input type="Submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default SignUpPage;
