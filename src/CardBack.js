import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import constants from "./constants";

export default class CardBack extends PureComponent {
  static propTypes = {
    lang: PropTypes.oneOf(["en", "es"]),
    show: PropTypes.bool,
    to: PropTypes.string,
  };

  render() {
    const { lang, show, to } = this.props;
    const displayClass = show ? "not-flipped" : "flipped";
    return (
      <Row className={displayClass}>
        <Col>
          <div className="m-2 p-3" id="back-container">
            <h2 className="festive">{constants.formattedText(constants.backTitle, lang, to)}</h2>
            <p className="mt-4">{constants.backMessage1[lang]}</p>
            <p>{constants.backMessage2[lang]}</p>
            <footer>
              <span aria-label="Signature emojis" role="img">
                👨‍💻 🌮 📚 🐻 🐶
              </span>
            </footer>
          </div>
        </Col>
      </Row>
    );
  }
}
