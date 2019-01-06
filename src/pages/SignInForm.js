import React, { Component } from "react";
import fire from "../config/Fire";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Home from "../Home.js";
import firebase from 'firebase'

class SignInForm extends Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false
    };
    this.isLoggedIn = false;
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
		.setPersistence(firebase.auth.Auth.Persistence.NONE)
      .then(function() {})
      .catch(function(error) {
        // Handle Errors here.
      });

    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        var user = fire.auth().currentUser;

        if (user) {
          // User is signed in.
          console.log("sign in successfully");
          this.setState({ isLoggedIn: true }); // changed ULR to /store.html ????
        } else {
          // No user is signed in.
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <Router basename="/react-auth-ui/">
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
            <Route path="/home" component={Home} />
          </form>
        </div>
      </Router>
    );
  }
}

export default SignInForm;
