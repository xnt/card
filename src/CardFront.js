import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export default class CardFront extends Component {
  static propTypes = {
    imageUrl: PropTypes.string,
  };

  render() {
    const { imageUrl } = this.props;
    return (
      <Row>
        <Col>
          <img alt="Card" className="m-2" src={imageUrl} id="cardImage" />
          <div className="festive p-2" id="cardText">
            <h1>Happy Holidays</h1>
            <p>From the Plata-Reveles Family</p>
          </div>
        </Col>
      </Row>
    );
  }
}
