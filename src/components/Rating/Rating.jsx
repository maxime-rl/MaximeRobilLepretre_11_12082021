import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Rating.scss";

/**
 * Rating component
 * @param {number} rating property rating
 */
class Rating extends Component {
  render() {
    const { rating } = this.props;
    const range = [1, 2, 3, 4, 5];

    return (
      <ul className="rating-list">
        {range.map((index) =>
          rating >= index ? (
            <li key={index}>
              <i className="rating-list__rate rating-list__rate--full"></i>
            </li>
          ) : (
            <li key={index}>
              <i className="rating-list__rate rating-list__rate--empty"></i>
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
