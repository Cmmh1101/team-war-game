import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="main-section text-white text-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column">
            <h1 className="my-5 titles hero-title">Quadruple War</h1>
            <p className="lead">
              <strong>A React Card Game</strong>
              <br /> by Carla Montano and Will Prouty
            </p>
            <Link to="/play" className="col mb-3 text-warning mb-lg-0 btn-hero">
              PLAY <i className="fa fa-arrow-right" aria-hidden="true" />
            </Link>
          </Col>
          <Col lg={6}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/z2K6uMX_g-U"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
