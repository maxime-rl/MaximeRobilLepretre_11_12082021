import React, { Component } from "react";
import { data } from "../../data/data";
import Error404Page from "../Error404Page/Error404Page";
import { Rating, Dropdown, Carousel, TagList, Host } from "../../components";
import PropTypes from "prop-types";
import "./PropertyLocationPage.scss";

/**
 * PropertyLocationPage component
 * @param {string} match.params.id id of a property injected into the url
 * @property {object} currentProperty current property matching with url id
 */
class PropertyLocationPage extends Component {
  render() {
    const idUrlParam = this.props.match.params.id;

    const currentProperty = data.find((elt) => elt.id === idUrlParam);

    if (!currentProperty) {
      return <Error404Page />;
    }

    const {
      title,
      rating,
      description,
      equipments,
      pictures,
      tags,
      host,
      location,
    } = currentProperty;
    console.log(currentProperty);

    return (
      <>
        <header className="property-header global-layout-wrapper">
          <Carousel pictures={pictures} alt={title} />
        </header>
        <main className="property-main global-layout-wrapper">
          <h1 className="property-main__title">{title}</h1>
          <p className="property-main__location">{location}</p>
          <TagList tags={tags} />
          <Rating rating={rating} />
          <Host name={host.name} src={host.picture} />
          <Dropdown header="Description" content={description} />
          <Dropdown header="Équipement" content={equipments} />
        </main>
      </>
    );
  }
}

PropertyLocationPage.propTypes = {
  match: PropTypes.shape({
    idUrlParam: PropTypes.string,
  }).isRequired,
};

export default PropertyLocationPage;
