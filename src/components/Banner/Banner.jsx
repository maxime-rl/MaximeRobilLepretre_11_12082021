import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

/**
 * Banner component use for headers with conditional title
 * @param {string} src banner picture url
 * @param {string} alt picture alt tag content
 * @param {string} title banner conditional title
 */
class Banner extends Component {
  render() {
    const { src, alt, title } = this.props;

    return (
      <div className="banner global-layout-wrapper">
        <img className="banner__picture" src={src} alt={alt} />
        {title ? <h1 className="banner__title">{title}</h1> : null}
      </div>
    );
  }
}

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Banner;
