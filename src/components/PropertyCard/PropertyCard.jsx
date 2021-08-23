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

/* defaultProps on image source, test the rendering when the component will be
hydrated from the data with PropertyList and built on the HomePage */
PropertyCard.defaultProps = {
  src: "https://via.placeholder.com/340/000000/FF6060/?text=Kasa",
};

export default PropertyCard;
