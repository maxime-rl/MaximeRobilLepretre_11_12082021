/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import arrow from "../../assets/arrow.svg";
import PropTypes from "prop-types";
import "./Carousel.scss";

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
        {pictures.length > 1 && (
          <button
            className="carousel__btn-nav carousel__btn-nav--prev"
            onClick={() => this.goToPrevPicture()}
          >
            <img src={arrow} alt="boutton image précédente du carousel" />
          </button>
        )}
        <img
          className="carousel__picture"
          src={pictures[currentPictureIndex]}
          alt={`Photo ${alt} numéro ${currentPictureIndex + 1}`}
        />
        {pictures.length > 1 && (
          <button
            className="carousel__btn-nav carousel__btn-nav--next"
            onClick={() => this.goToNextPicture()}
          >
            <img src={arrow} alt="boutton image suivante du carousel" />
          </button>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Carousel;
