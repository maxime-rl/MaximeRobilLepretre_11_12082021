import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./PropertyCard.scss";

class PropertyCard extends Component {
  render() {
    const { id, title, src } = this.props;

    return (
      <Link to={`/property-location/${id}`}>
        <article className="property-card">
          <h2>{title}</h2>
          <img src={src} alt={title} />
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
