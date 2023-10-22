import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <div className="footer">
      <div className="main">
        <div className="logo-footer">
          <img src="./logo-no-background.png" alt="Logo" className="logo" />
        </div>
        <div className="container">
          <div>
            <ul>
              <h1>Get to know Us</h1>
              <li>
                <a href="/"> About Momies</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h1>Shop with Us</h1>
              <li>
                <a href="/">Sun Glasses</a>
              </li>
              <li>
                <a href="/">Foot Wear</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h1>Let Us help You</h1>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            target="_blank"
            class="market-btn apple-btn"
            role="button">
            <span class="market-button-subtitle">Download on the</span>
            <span class="market-button-title">App Store</span>
          </a>
          <a
            href="/"
            target="_blank"
            class="market-btn google-btn"
            role="button">
            <span class="market-button-subtitle">Download on the</span>
            <span class="market-button-title">Google Play</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
