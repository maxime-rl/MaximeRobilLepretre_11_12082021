import React, { Component } from "react";
import { Banner } from "../../components";

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
      </>
    );
  }
}

export default HomePage;
