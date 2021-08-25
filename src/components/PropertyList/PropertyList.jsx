import React, { Component } from "react";
import { PropertyCard } from "../../components";
import FetchData from "../../FetchData/FetchData";
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
    this.mounted = true;
    this.getData();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  async getData() {
    const data = await new FetchData().getAllPropertyCards();
    this.setState({ data: data });
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
