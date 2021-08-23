import React, { Component } from "react";
import { Banner, Dropdown } from "../../components";
import aboutBanner from "../../assets/about_banner.jpg";
import { dropdownContentAboutPage } from "../../data/data";
import "./AboutPage.scss";

/**
 * AboutPage component
 * Display about page
 */
class AboutPage extends Component {
  render() {
    return (
      <>
        <header className="about-header">
          <Banner src={aboutBanner} alt="Paysage nature" />
        </header>
        <main className="about-main">
          {dropdownContentAboutPage.map(({ title, content, index }) => (
            <Dropdown
              key={`${title}-${index}`}
              header={title}
              content={content}
            />
          ))}
        </main>
      </>
    );
  }
}

export default AboutPage;
