import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <img src="./assets/kasa_logo_white.svg" alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
