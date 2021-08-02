import React from "react";
import { a } from "react-router-dom";

function ContactUs() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <h1>Contact Us</h1>
        </div>
        <div className="row">
          <div className="col">
            <h3>Will Prouty</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <a
              href="https://www.linkedin.com/in/will-prouty-07882b93/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="col-6">
            <a
              href="https://github.com/illfriday"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Carla Montano</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <a
              href="https://www.linkedin.com/in/carla-montano/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="col-6">
            <a
              href="https://github.com/Cmmh1101"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <h3>Project Repository</h3>
          </div>
          <div className="col">
            <a
              href="https://github.com/Cmmh1101/team-war-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quadruple War Github Repository
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactUs;
