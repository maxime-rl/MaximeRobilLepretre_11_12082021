import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Host.scss";

/**
 * Host component
 * @param {string} name host name
 * @param {string} src host picture url
 * @property {string} firstName host first name, use name.firstName in parent component
 * @property {string} lastName host last name, use name.lastName in parent component
 */
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
