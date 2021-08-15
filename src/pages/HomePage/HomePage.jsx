import React, { Component } from "react";
import { Banner, PropertyList } from "../../components";
import { data } from "../../data/data";
import "./HomePage.scss";

class HomePage extends Component {
  render() {
    return (
      <>
        <header>
          <Banner
            src="../../assets/home_banner.jpg"
            alt="Paysage nature"
            title="Chez vous, partout et ailleurs"
          />
        </header>
        <main className="main-home-page global-layout-wrapper">
          <PropertyList kasa_DATA={data} />
        </main>
      </>
    );
  }
}

export default HomePage;
