import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Footer, ScrollToTopBtn } from "../components";
import {
  HomePage,
  AboutPage,
  PropertyLocationPage,
  Error404Page,
} from "../pages";
import { ScrollToTop, ReFocus } from "../utils";

class App extends Component {
  render() {
    return (
      <Router>
        <ReFocus>
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
          <ScrollToTopBtn />
          <Footer />
        </ReFocus>
        <ScrollToTop />
      </Router>
    );
  }
}

export default App;
