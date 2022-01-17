import React, { Component } from "react";
import "./style/login.css";
import PropTypes from "prop-types";
import Input from "../components/Input";
import Button from "../components/Button";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeEmail(value) {
    this.setState({
      email: value,
    });
  }
  onChangePassword(value) {
    this.setState({
      password: value,
    });
  }
  render() {
    const { email, password } = this.state;
    return (
      <>
        <div class="loginWrapper">
          <div class="loginContent">
            <h2>Login</h2>
            <div class="userLogoWrapper">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                alt="User icon"
              ></img>
            </div>
            <div class="inputFields">
              <label class="label" for="email">
                Email/username
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => {
                  this.onChangeEmail(e.target.value);
                }}
                placeholder="Type your email"
              ></Input>
              <label class="label" for="email">
                Password
              </label>
              <Input
                id="email"
                value={email}
                onChange={(e) => {
                  this.onChangePassword(e.target.value);
                }}
                type="password"
                placeholder="Type your password"
              ></Input>
            </div>
            <div class="loginButtonWrapper">
              <Button label="Login" width="200px"></Button>
            </div>
            <label class="signUpWith">Or sign up with:</label>
            <div class="networkIcons">
              <img
                src="https://image.similarpng.com/very-thumbnail/2021/01/Facebook-icon-with-flat-design-on-transparent-background-PNG.png"
                alt="Facebook logo"
              ></img>
              <img
                src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
                alt="Twitter logo"
              ></img>{" "}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Gmail_Icon_%282013-2020%29.svg/2048px-Gmail_Icon_%282013-2020%29.svg.png"
                alt="Gmail logo"
              ></img>
            </div>
          </div>
        </div>
        <div>This is cmtered div</div>
      </>
    );
  }
}
