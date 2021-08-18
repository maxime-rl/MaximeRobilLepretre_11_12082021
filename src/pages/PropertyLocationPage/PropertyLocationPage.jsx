import React, { Component } from "react";
import { data } from "../../data/data";
import Error404Page from "../Error404Page/Error404Page";

class PropertyLocationPage extends Component {
  render() {
    const idUrlParam = this.props.match.params.id;
    const currentProperty = data.find((elt) => elt.id === idUrlParam);

    if (!currentProperty) {
      return <Error404Page />;
    }

    const { title } = currentProperty;

    return <div>{title}</div>;
  }
}

export default PropertyLocationPage;
