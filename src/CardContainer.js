import React, { PureComponent } from "react";
import { Container } from "react-bootstrap";
import CardFront from "./CardFront";
import CardBack from "./CardBack";
import constants from "./constants";

export default class CardContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.searchParams = new URL(window.location).searchParams;
    this.lang = this.searchParams.get("lang");
    this.to = this.searchParams.get("to");
    this.state = {
      showBack: false,
      showFront: true,
    };
  }

  flipCard() {
    const { showBack } = this.state;
    this.setState({
      showBack: !showBack,
      showFront: showBack,
    });
  }

  render() {
    const { lang, to } = this;
    const { showBack, showFront } = this.state;
    return (
      <>
        <h1>¡Felices Fiestas 🎄🎅!</h1>
        <Container className="flipContainer" onClick={this.flipCard.bind(this)}>
          <CardFront lang={lang} imageUrl={constants.imageUrl} show={showFront} to={to} />
          <CardBack lang={lang} show={showBack} to={to} />
        </Container>
      </>
    );
  }
}
