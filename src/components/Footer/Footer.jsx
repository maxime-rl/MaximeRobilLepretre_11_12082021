import React, { Component } from "react";
import logo from "../../assets/kasa_logo_white.svg";
import "./Footer.scss";

/**
 * Footer component
 * footer for the whole application
 */
class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img className="footer__logo" src={logo} alt="Logo Kasa" />
        <p className="footer__infos">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
