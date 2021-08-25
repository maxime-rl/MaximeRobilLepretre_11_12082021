import React, { Component } from "react";
import arrow from "../../assets/arrow.svg";
import PropTypes from "prop-types";
import "./Dropdown.scss";

/**
 * Dropdown component
 * @param {string} header dropdown toggle button title
 * @param {string} content content of the dropdown
 * @property {boolean} isOpen state to manage the dropdown toggle
 */
class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleInsideClick = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleOutsideClick = () => {
    this.setState({
      isOpen: false,
    });
  };

  componentDidUpdate() {
    const { isOpen } = this.state;

    if (isOpen) {
      window.addEventListener("click", this.handleOutsideClick);
    } else {
      window.removeEventListener("click", this.handleOutsideClick);
    }
  }

  render() {
    const { isOpen } = this.state;
    const { header, content } = this.props;

    return (
      <div className="dropdown">
        <button
          type="button"
          className="dropdown__header"
          onClick={(e) => {
            e.stopPropagation();
            this.handleInsideClick();
          }}
        >
          <div className="dropdown__header-title">{header}</div>
          {isOpen ? (
            <img
              className="dropdown__arrow dropdown__arrow--up"
              src={arrow}
              alt="icône dropdown ouvert"
            />
          ) : (
            <img
              className="dropdown__arrow dropdown__arrow--down"
              src={arrow}
              alt="icône dropdown fermé"
            />
          )}
        </button>
        {typeof content === "string" ? (
          <p
            className={`dropdown__content ${
              isOpen ? "dropdown__content--open" : "dropdown__content--close"
            }`}
          >
            {content}
          </p>
        ) : (
          <ul
            className={`dropdown__content ${
              isOpen ? "dropdown__content--open" : "dropdown__content--close"
            }`}
          >
            {content.map((elt, index) => (
              <li key={index}>{elt}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Dropdown.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

export default Dropdown;
