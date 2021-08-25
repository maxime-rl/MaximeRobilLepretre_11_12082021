import React, { Component } from "react";
import { Banner, PropertyList } from "../../components";
import homeBanner from "../../assets/home_banner.jpg";
import "./HomePage.scss";

/**
 * HomePage component
 * Display Kasa home page
 */
class HomePage extends Component {
  render() {
    return (
      <>
        <header>
          <Banner
            src={homeBanner}
            alt="Paysage nature"
            title="Chez vous, partout et ailleurs"
          />
        </header>
        <main className="home-main global-layout-wrapper">
          <PropertyList />
        </main>
      </>
    );
  }
}

export default HomePage;
