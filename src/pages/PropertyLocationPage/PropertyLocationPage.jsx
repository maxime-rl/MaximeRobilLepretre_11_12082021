import React, { Component } from "react";
import { data } from "../../data/data";
import Error404Page from "../Error404Page/Error404Page";
import { Rating, Dropdown } from "../../components";

class PropertyLocationPage extends Component {
  render() {
    const idUrlParam = this.props.match.params.id;
    const currentProperty = data.find((elt) => elt.id === idUrlParam);

    if (!currentProperty) {
      return <Error404Page />;
    }

    const { title, rating, description, equipments } =
      currentProperty;

    return (
      <>
        <div>{title}</div>
        <Rating rating={rating} />
        <Dropdown header="Description" content={description} />
        <Dropdown header="Équipement" content={equipments} />
      </>
    );
  }
}

export default PropertyLocationPage;
