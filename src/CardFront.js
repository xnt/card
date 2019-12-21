import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import constants from "./constants";

export default class CardFront extends Component {
  static propTypes = {
    lang: PropTypes.oneOf(["en", "es"]),
    imageUrl: PropTypes.string.isRequired,
    show: PropTypes.bool,
    to: PropTypes.string,
  };

  static defaultProps = {
    lang: "en",
    to: "Friend",
  };

  render() {
    const { lang, imageUrl, show, to } = this.props;
    const displayClass = show ? "not-flipped" : "flipped";
    return (
      <Row className={displayClass}>
        <Col>
          <div className="festive p-2" id="frontCardText">
            <h3>{constants.formattedText(constants.frontTitle, lang, to)}</h3>
            <p>{constants.frontMessage[lang]}</p>
          </div>
          <img alt="Card" className="m-2" src={imageUrl} id="frontCardImage" />
        </Col>
      </Row>
    );
  }
}
