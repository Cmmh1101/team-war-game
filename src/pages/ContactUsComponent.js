import React from "react";
import { Link } from "react-router-dom";
import { FadeTransform } from "react-animation-components";

function ContactUs() {
  return (
    <div className="main-section">
      <div className="container text-white">
        <div className="row">
          <div className="col text-center mb-5 titles ">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="500"
            >
              <h1>Contact Us</h1>
            </FadeTransform>
          </div>
        </div>
        <div className="row">
          <div className="col-6 text-center">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="1000"
            >
              <h3>
                Will
                <br />
                Prouty
              </h3>
              <div
                className="col-12 d-flex
                      align-items-center
                      justify-content-center contact-icons contact-icons"
              >
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/will-prouty-07882b93/",
                  }}
                  target="_blank"
                  className="nav-link m-2"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </Link>
                <Link
                  to={{ pathname: "https://github.com/illfriday" }}
                  target="_blank"
                  className="nav-link m-2"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </Link>
              </div>
            </FadeTransform>
          </div>
          <div className="col-6 text-center">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="1000"
            >
              <h3>
                Carla
                <br />
                Montano
              </h3>
              <div
                className="col-12 d-flex
                      align-items-center
                      justify-content-center contact-icons contact-icons"
              >
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/carla-montano" }}
                  target="_blank"
                  className="nav-link m-2"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </Link>
                <Link
                  to={{ pathname: "https://github.com/cmmh1101" }}
                  target="_blank"
                  className="nav-link m-2"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </Link>
              </div>
            </FadeTransform>
          </div>
        </div>

        <div className="row">
          <div className="col-12 git-project d-flex justify-content-center flex-column text-center">
            <FadeTransform
              in
              transformProps={{
                exitTransform: "scale(0.5) translateX(-100%)",
              }}
              delay="2000"
            >
              <hr />
              <h2>Project Repository</h2>
              <div>
                <Link
                  to={{ pathname: "https://github.com/Cmmh1101/team-war-game" }}
                  target="_blank"
                  className="nav-link m-2"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                  <span> Quadruple War Github Repository</span>
                </Link>
              </div>
            </FadeTransform>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
