import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/kasa_logo_color.svg";
import "./NavBar.scss";

/**
 * NavBar component
 * main navigation for the whole application
 */
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar global-layout-wrapper">
        <Link to="/" className="navbar__logo-link">
          <img className="navbar__logo" src={logo} alt="Logo Kasa" />
        </Link>
        <ul className="navbar__nav">
          <li className="navbar__nav-links">
            <NavLink exact activeClassName="active-link" to="/">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__nav-links">
            <NavLink activeClassName="active-link" to="/about">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
