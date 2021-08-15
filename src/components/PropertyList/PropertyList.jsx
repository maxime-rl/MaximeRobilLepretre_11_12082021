import React, { Component } from "react";
import { PropertyCard } from "../../components";

class PropertyList extends Component {
  render() {
    return (
      <>
        {this.props.kasa_DATA.map((elt) => (
          <PropertyCard
            key={`PropertyCard-${elt.id}`}
            title={elt.title}
            src={elt.cover}
            id={elt.id}
          />
        ))}
      </>
    );
  }
}

export default PropertyList;
