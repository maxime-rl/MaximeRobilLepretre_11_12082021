import React, { Component } from "react";
import { Banner } from "../../components";
import aboutBanner from "../../assets/about_banner.jpg";

class AboutPage extends Component {
  render() {
    return (
      <>
        <header>
          <Banner src={aboutBanner} alt="Paysage nature" />
        </header>
      </>
    );
  }
}

export default AboutPage;
