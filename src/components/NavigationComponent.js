import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" color="secondary" dark expand="sm">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <div className="container">
            <Nav className="d-flex justify-content-between navbar" navbar>
              <NavItem>
                <Link className="text-white" to="/">
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link className="text-white" to="/play">
                  Play
                </Link>
              </NavItem>
              <NavItem>
                <Link className="text-white" to="/about">
                  About
                </Link>
              </NavItem>
              <NavItem>
                <Link className="text-white" to="/contactus">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
