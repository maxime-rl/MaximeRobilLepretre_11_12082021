import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";

// Banner to render header with conditional title
class Banner extends Component {
  render() {
    const { src, alt, title } = this.props;

    return (
      <div className="banner global-layout-wrapper">
        <img src={src} alt={alt} />
        {title ? <h1>{title}</h1> : null}
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
