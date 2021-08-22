import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Host.scss";

class Host extends Component {
  render() {
    const { name, src } = this.props;
    const firstName = name.split(" ")[0];
    const lastName = name.split(" ")[1];

    return (
      <div className="host">
        <div className="host__name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <img className="host__picture" src={src} alt={name} />
      </div>
    );
  }
}

Host.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default Host;
