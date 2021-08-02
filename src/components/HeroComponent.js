import React from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

function Hero() {
  return (
    <React.Fragment>
      <Jumbotron className="jumbo" fluid>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="display-3 mb-5">Quadruple War</h1>
              <p className="lead">
                <strong>A React Card Game</strong>
                <br /> by Carla Montano and Will Prouty
              </p>
            </Col>
            <Col md={6}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/z2K6uMX_g-U"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </React.Fragment>
  );
}

export default Hero;
