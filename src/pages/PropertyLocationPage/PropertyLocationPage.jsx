import React, { Component } from "react";
import { data } from "../../data/data";
import Error404Page from "../Error404Page/Error404Page";
import { Rating, Dropdown, Carousel, TagList, Host } from "../../components";
import "./PropertyLocationPage.scss";

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

export default PropertyLocationPage;
