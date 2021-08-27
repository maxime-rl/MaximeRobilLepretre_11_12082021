import React, { Component } from "react";
// import arrow from "../../assets/arrow.svg";
import "./ScrollToTopBtn.scss";

/**
 * ScrollToTopBtn component
 * @property {boolean} isVisible state to manage the visible button
 */
class ScrollToTopBtn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleVisible.bind(this));
  }

  toggleVisible = () => {
    if (window.pageYOffset > 1500) {
      this.setState({
        isVisible: true,
      });
    } else {
      this.setState({
        isVisible: false,
      });
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollToTop());
  }

  render() {
    const { isVisible } = this.state;

    return isVisible ? (
      <button className="scroll-to-top-btn" onClick={this.scrollToTop}></button>
    ) : null;
  }
}

export default ScrollToTopBtn;
