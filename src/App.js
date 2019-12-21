import React from "react";
import "./App.css";
import constants from "./constants";
import CardFront from "./CardFront";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <CardFront imageUrl={constants.imageUrl} />
      </Container>
    </div>
  );
}

export default App;
