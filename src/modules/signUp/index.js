import React from "react";
import "./signup.scss";
import UserIcon from "../../assets/icons/user.svg";
import LockIcon from "../../assets/icons/lock.svg";
import EyeIcon from "../../assets/icons/eye.svg";
import LocationIcon from "../../assets/icons/location.svg";
import CalenderIcon from "../../assets/icons/calender.svg";
import MailIcon from '../../assets/icons/mail.svg'
import CountryIcon from '../../assets/icons/flag.svg'
export default function Signup() {
  return (
    <div>
      <div className="signup-main">
        <div className="container-sm">
          <div className="main-grid-signup">
            <h2>Create Seller Account</h2>
            <h3>Securely signup to your account</h3>
          </div>
          <div className="input-bar">
            <form method="POST">
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Full Name"
                  autocomplete="email"
                  required
                />
                <div className="svg-icon">
                  <img src={UserIcon} alt="User-icon" />
                </div>
              </div>

              <div className="grid-input-box">
                <div className="input-box">
                  <input type="number" placeholder="Date of Birth" />
                  <div className="svg-icon">
                    <img src={CalenderIcon} alt="calender-icon" />
                  </div>
                </div>
                <div className="input-box">
                  <input type="email" placeholder="Email" required />
                  <div className="svg-icon">
                    <img src={MailIcon} alt="Mail-icon" />
                  </div>
                </div>
                <div className="input-box">
                  <input type="tel" placeholder="+91 Enter number" />
                  <div className="svg-icon">
                    <img src={CountryIcon} alt="Country-icon" />
                  </div>
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Password" />
                  <div className="svg-icon">
                    <img src={LockIcon} alt="Lock-icon" />
                  </div>
                  <img src={EyeIcon} alt="eye-icon" className="eye-custom"/>
                </div>
              </div>
              <div className="input-box">
                <input type="text" placeholder="Address" />
                <div className="svg-icon">
                  <img src={LocationIcon} alt="Location-icon" />
                </div>
              </div>
              <div className="submit-button">
                <button type="submit" aria-label="Login">
                  Sign up
                </button>
              </div>
            </form>
            <div className="sign-up-option">
              <h5>I Already Have an Account</h5>
              <p>Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
