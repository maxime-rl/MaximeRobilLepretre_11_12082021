import React, { Component } from "react";
import FetchData from "../../FetchData/FetchData";
import Error404Page from "../Error404Page/Error404Page";
import { Rating, Dropdown, Carousel, TagList, Host } from "../../components";
import PropTypes from "prop-types";
import "./PropertyLocationPage.scss";

/**
 * PropertyLocationPage component
 * @param {string} match.params.id id of a property injected into the url
 * @param {object} data data containing all the information for current property
 * @param {object} currentProperty current property data matching with url id after fetch data
 */
class PropertyLocationPage extends Component {
  constructor(props) {
    super(props);
    this.idUrlParam = this.props.match.params.id;
    this.state = { data: [] };
  }

  componentDidMount() {
    this.mounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async getData() {
    const data = await new FetchData().getPropertyByID(this.idUrlParam);
    this.setState({ currentProperty: data });
  }

  render() {
    const { currentProperty } = this.state;

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
