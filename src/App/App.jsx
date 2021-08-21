import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar, Footer } from "../components";
import {
  HomePage,
  AboutPage,
  PropertyLocationPage,
  Error404Page,
} from "../pages";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route
            path="/property-location/:id"
            render={(props) => <PropertyLocationPage {...props} />}
          />
          <Route>
            <Error404Page />
          </Route>
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
