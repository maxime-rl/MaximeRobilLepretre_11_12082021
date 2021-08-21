import React, { Component } from "react";

class TagList extends Component {
  render() {
    const { tags } = this.props;
    return (
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    );
  }
}

export default TagList;
