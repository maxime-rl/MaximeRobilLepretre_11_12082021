import React, { Component } from "react";
import PropTypes from "prop-types";

class Host extends Component {
  render() {
    const { name, src } = this.props;
    return (
      <div>
        <p>{name}</p>
        <img src={src} alt={name} />
      </div>
    );
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Host;
