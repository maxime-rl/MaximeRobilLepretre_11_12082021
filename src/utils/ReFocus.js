import { Component } from "react";
import { withRouter } from "react-router-dom";

class ReFocus extends Component {
  componentDidUpdate() {
    if (this.node) {
      this.node.focus();
    }
  }

  render() {
    return (
      <div ref={(n) => (this.node = n)} tabIndex={-1}>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(ReFocus);
