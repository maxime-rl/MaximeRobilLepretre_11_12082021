import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <Link to="/">
          <img src="./assets/kasa_logo_color.svg" alt="Logo Kasa" />
        </Link>
        <ul>
          <li>
            <NavLink exact activeClassName="active-link" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
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
