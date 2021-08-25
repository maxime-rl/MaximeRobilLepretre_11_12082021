import React, { Component } from "react";
import { PropertyCard } from "../../components";
import "./PropertyList.scss";

/**
 * PropertyList component
 * Display of the list of rental properties
 * @param {object} data data containing the list and all the information of all the properties
 */
class PropertyList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    const fetchData = async () => {
      try {
        const response = await fetch("./data/data.json");

        if (response.ok) {
          const data = await response.json();
          this.setState({ data: data });
        } else {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }

  render() {
    const { data } = this.state;
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
