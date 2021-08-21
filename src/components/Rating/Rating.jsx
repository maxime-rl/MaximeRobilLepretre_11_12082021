import React, { Component } from "react";
import starFull from "../../assets/star_full.svg";
import starEmpty from "../../assets/star_empty.svg";
import PropTypes from "prop-types";

class Rating extends Component {
  render() {
    const { rating } = this.props;
    const range = [1, 2, 3, 4, 5];

    return (
      <ul>
        {range.map((index) =>
          rating >= index ? (
            <li key={index}>
              <img src={starFull} alt="note valide" />
            </li>
          ) : (
            <li key={index}>
              <img src={starEmpty} alt="note non valide" />
            </li>
          )
        )}
      </ul>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.oneOf(["1", "2", "3", "4", "5"]).isRequired,
};

export default Rating;
