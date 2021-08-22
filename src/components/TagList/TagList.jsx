import React, { Component } from "react";
import "./TagList.scss";

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

export default TagList;
