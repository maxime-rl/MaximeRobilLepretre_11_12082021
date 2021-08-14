import React, { Component } from "react";
import { Banner } from "../../components";

class AboutPage extends Component {
  render() {
    return (
      <>
        <header>
          <Banner src="../../assets/about_banner.jpg" alt="Paysage nature" />
        </header>
      </>
    );
  }
}

export default AboutPage;
