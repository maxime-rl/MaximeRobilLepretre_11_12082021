import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PropertyCard.scss";

/**
 * PropertyCard component
 * @param {string} id property id used for individual display in PropertyLocationPage
 * @param {string} title property title
 * @param {string} src property picture url
 */
class PropertyCard extends Component {
  render() {
    const { id, title, src } = this.props;

    return (
      <Link to={`/property-location/${id}`}>
        <article className="property-card">
          <h2 className="property-card__title">{title}</h2>
          <img className="property-card__picture" src={src} alt={title} />
        </article>
      </Link>
    );
  }
}

PropertyCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default PropertyCard;
