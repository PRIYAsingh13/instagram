import React, { Component } from "react";
import "./LoginPage.css";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="flex_container">
          <div className="mob-img">
            <img src="images/mob-img2.jpeg" />
          </div>
          <div className="login-form">
            <div logo-name>
              <h1>instagram</h1>
            </div>
            <div className="input">
              <input type="text" placeholder="Phone number,username,email" />
              <input type="passward" placeholder="passward" />
              <button className="login-btn">log in</button>
              <div className="or">_________ or __________</div>
              <div className="facebook-logo">
                <i class="fa-brands fa-square-facebook"></i>
                <span className="facebook-text">Login with facebook</span>
              </div>
              <div className="forgot-password">
              Forgot password?
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
