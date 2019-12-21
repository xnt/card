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
          <img alt="Card" src={imageUrl} id="cardImage" />
        </Col>
      </Row>
    );
  }
}
