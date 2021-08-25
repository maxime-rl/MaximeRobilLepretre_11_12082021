import React, { Component } from "react";
import { PropertyCard } from "../../components";
import { data } from "../../data/data";
import "./PropertyList.scss";

/**
 * PropertyList component
 * Display of the list of rental properties
 * @param {object} data hard data containing the list and all the information of all the properties
 */
class PropertyList extends Component {
  render() {
    return (
      <ul className="property-list">
        {data.map((elt) => (
          <li key={`PropertyCard-${elt.id}`}>
            <PropertyCard title={elt.title} src={elt.cover} id={elt.id} />
          </li>
        ))}
      </ul>
    );
  }
}

export default PropertyList;
