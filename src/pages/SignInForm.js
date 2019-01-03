import React, { Component } from "react";
import fire from "../config/Fire";
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Home from "../Home.js";
import { Link } from "react-router-dom";

class SignInForm extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
    console.log("sign in successfully");
  }

  render() {
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>

          <div className="FormField">
            <button
              type="submit"
              onClick={this.login}
              className="FormField__Button mr-20"
            >
              Sign In
            </button>{" "}
            <Link to="/" className="FormField__Link">
              Create an account
            </Link>
          </div>
          <Route path="/Home" component={Home} />
        </form>
      </div>
    );
  }
}

export default SignInForm;
