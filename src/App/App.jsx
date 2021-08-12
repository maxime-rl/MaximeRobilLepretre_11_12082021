import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar, Footer } from "../components";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Footer />
      </Router>
    );
  }
}

export default App;
