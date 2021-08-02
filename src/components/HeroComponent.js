import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className=" bg-dark main-section text-white text-center">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-items-center flex-column mb-3">
            <h1 className="mb-5 titles hero-title">Quadruple War</h1>
            <p className="lead">
              <strong>A React Card Game</strong>
              <br /> by Carla Montano and Will Prouty
            </p>
            <Link
              to="/play"
              className="col-2 mb-2 mb-lg-0 btn btn-warning btn-hero"
            >
              Play
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
