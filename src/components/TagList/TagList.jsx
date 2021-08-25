import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TagList.scss";

/**
 * Taglist component
 * @param {array} tags property tag list
 */
class TagList extends Component {
  render() {
    const { tags } = this.props;
    return (
      <ul className="tag-list">
        {tags.map((tag, index) => (
          <li className="tag-list__tag" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    );
  }
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagList;
