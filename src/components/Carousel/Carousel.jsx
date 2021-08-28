/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";

/**
 * Carousel component
 * @param {array} pictures carousel pictures
 * @param {string} alt title of the properties used in the alt tag of each picture in the carousel
 * @property {number} currentPictureIndex state for manage pictures position
 */
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPictureIndex: 0,
    };
  }

  goToPrevPicture() {
    let index = this.state.currentPictureIndex;
    if (index === 0) {
      this.setState({ currentPictureIndex: this.props.pictures.length - 1 });
    } else {
      this.setState({ currentPictureIndex: index - 1 });
    }
  }

  goToNextPicture() {
    let index = this.state.currentPictureIndex;
    if (index === this.props.pictures.length - 1) {
      this.setState({ currentPictureIndex: 0 });
    } else {
      this.setState({ currentPictureIndex: index + 1 });
    }
  }

  render() {
    const { pictures, alt } = this.props;
    const { currentPictureIndex } = this.state;

    return (
      <div className="carousel">
        {pictures.length > 1 ? (
          <div>
            <button
              className="carousel__btn-nav carousel__btn-nav--prev"
              onClick={() => this.goToPrevPicture()}
            ></button>
            <span className="carousel__counter">
              {currentPictureIndex + 1}/{pictures.length}
            </span>
            <button
              className="carousel__btn-nav carousel__btn-nav--next"
              onClick={() => this.goToNextPicture()}
            ></button>
          </div>
        ) : null}
        <img
          className="carousel__picture"
          src={pictures[currentPictureIndex]}
          alt={`Photo ${alt} numéro ${currentPictureIndex + 1}`}
        />
      </div>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Carousel;
