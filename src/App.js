import React from "react";
import "./App.css";
import constants from "./constants";
import CardBack from "./CardBack";
import CardFront from "./CardFront";
import { Container } from "react-bootstrap";

function App() {
  const searchParams = new URL(window.location).searchParams;

  return (
    <div className="App">
      <Container>
        <CardFront lang={searchParams.get("lang")} imageUrl={constants.imageUrl} />
        <CardBack lang={searchParams.get("lang")} to={searchParams.get("to")} />
      </Container>
    </div>
  );
}

export default App;
