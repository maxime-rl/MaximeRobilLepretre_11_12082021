import React, { Component } from "react";
import { PropertyCard } from "../../components";
import "./PropertyList.scss";

class PropertyList extends Component {
  render() {
    return (
      <ul className="property-list">
        {this.props.kasa_DATA.map((elt) => (
          <li key={`PropertyCard-${elt.id}`}>
            <PropertyCard
              title={elt.title}
              src={elt.cover}
              id={elt.id}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default PropertyList;
