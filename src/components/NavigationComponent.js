import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  
} from "reactstrap";
import { NavLink } from "react-router-dom";

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
                <NavLink className="text-white" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" to="/play">
                  Play
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-white" to="/contactus">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
