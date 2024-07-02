import React from "react";
import "./login.scss";
import MailIcon from "../../assets/icons/mail.svg";
import LockIcon from "../../assets/icons/lock.svg";
import EyeIcon from "../../assets/icons/eye.svg";
export default function Login() {
  return (
    <div>
      <div className="login-main">
        <div className="container-extra-sm">
          <div className="main-grid-login">
            <h2>Login</h2>
            <h3>Securely login to your account</h3>
          </div>
          <div className="input-bar">
            <form action="/login" method="POST">
              <div className="input-box">
                <input type="email" placeholder="Email" autocomplete="email" required />
                <div className="svg-icon">
                  <img src={MailIcon} alt="mail-icon" />
                </div>
              </div>
              <div className="input-box">
                <input type="password" placeholder="Password" required />
                <div className="svg-icon">
                  <img src={LockIcon} alt="lock-icon" />
                </div>
                <img src={EyeIcon} alt="eye-icon" className="eye-custom" />
              </div>
              <div className="sm-text-login">
                <h4>Forgot password?</h4>
              </div>
              <div className="submit-button">
                <button type="submit" aria-label="Login">
                  Login
                </button>
              </div>
            </form>
            <div className="sign-up-option">
              <h5>Create An Account</h5>
              <p>Sign Up</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
